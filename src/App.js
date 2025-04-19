import './App.css'
import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'
import { Footer } from './MyComponents/Footer'
import { AddTodo } from './MyComponents/AddTodo'
import { About } from "./MyComponents/About"
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Main app component that handles the todo list functionality
function App() {
  // Try to load saved todos from browser storage, or start with empty list
  let initTodo = []
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  // Set up our main todos state and search functionality
  const [todos, setTodos] = useState(initTodo.map((todo, index) => ({
    ...todo,
    originalPosition: todo.originalPosition ?? index
  })))
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  // Remove a todo from the list
  function onDelete(todo) {
    setTodos(todos.filter(t => t !== todo))
    localStorage.getItem("todos", JSON.stringify(todos))
  }

  // Mark a todo as complete/incomplete and sort the list
  function toggleComplete(todo) {
    // First update the todo's completed status
    const updated = todos.map(t => {
      if (t.sno === todo.sno) {
        return { ...t, completed: !t.completed }
      }
      return t
    })
    
    // Then sort so completed items go to bottom
    const sorted = [...updated].sort((a, b) => {
      if (a.completed === b.completed) {
        return a.originalPosition - b.originalPosition
      }
      return a.completed ? 1 : -1
    })
    
    setTodos(sorted)
  }

  // Handle search functionality
  function handleSearch(query) {
    setSearchQuery(query)
    setIsSearching(true)
  }

  // Filter todos based on search query
  const filteredTodos = isSearching 
    ? todos.filter(todo => {
        const q = searchQuery.toLowerCase()
        return todo.title.toLowerCase().includes(q) ||
               todo.desc.toLowerCase().includes(q)
      })
    : todos

  // Add a new todo to the list
  function addTodo(title, desc) {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 0
    
    const todo = {
      sno,
      title,
      desc,
      completed: false,
      originalPosition: todos.length
    }
    setTodos([...todos, todo])
  }

  // Save todos to browser storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header 
          title="My ToDos List" 
          searchBar={true} 
          onSearch={handleSearch}
          setIsSearching={setIsSearching}
        />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos 
                todos={filteredTodos} 
                onDelete={onDelete} 
                onToggle={toggleComplete} 
              />
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
