import React from 'react'
import { TodoItem } from './TodoItem'

// Container component that shows the list of todos
export function Todos(props) {
  // Style for scrollable list container
  const style = {
    height: "44vh",
    overflowY: 'scroll'
  }

  return (
    <div className='container' style={style}>
      <h2 className='my-3'>Todos List</h2>
      {/* Show message if no todos, otherwise map through and show them */}
      {!props.todos.length ? (
        "No tasks yet!"
      ) : (
        props.todos.map(todo => (
          <TodoItem 
            key={todo.sno}
            todo={todo}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        ))
      )}
    </div>
  )
}
