import React from 'react'

// Shows a single todo item with checkbox and delete button
export const TodoItem = ({ todo, onDelete, onToggle }) => {
  // Style for done/not done todos
  const todoStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? '#6c757d' : 'inherit'
  };

  return (
    <>
    <div className="d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        aria-label="Mark as done"
      />
      <div style={todoStyle} className="flex-grow-1">
        <h5>{todo.title}</h5>
        <p className="mb-1">{todo.desc}</p>
      </div>
      <button 
        className="btn btn-sm btn-danger ms-2" 
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
    <hr />
    </>
  )
}
