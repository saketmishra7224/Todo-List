import React from 'react'

// Component for displaying a single todo item with checkbox and delete button
export const TodoItem = ({ todo, onDelete, onToggle }) => {
  // Style for showing completed/not completed status
  const todoStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? '#6c757d' : 'inherit'
  }

  return (
    <>
      {/* Flex container for todo item layout */}
      <div className="d-flex align-items-center">
        {/* Checkbox for marking todo as done */}
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          aria-label="Mark as done"
        />

        {/* Todo content - title and description */}
        <div style={todoStyle} className="flex-grow-1">
          <h5>{todo.title}</h5>
          <p className="mb-1">{todo.desc}</p>
        </div>

        {/* Delete button */}
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
