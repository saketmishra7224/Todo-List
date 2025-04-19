import React from 'react'
import {TodoItem} from './TodoItem';

// List of all todos
export const Todos = (props) => {
  // Scrollable container for long lists
  let style = {
    height: "44vh",
    overflowY: 'scroll'
  };

  return (
    <div className='container' style={style}>
      <h2 className='my-3'>Todos List</h2>
      {props.todos.length === 0 ? 
        "No tasks yet!" :
        props.todos.map((todo) => {
          return (
            <TodoItem 
              todo={todo} 
              key={todo.sno} 
              onDelete={props.onDelete}
              onToggle={props.onToggle}
            />
          )
        })
      }
    </div>
  )
}
