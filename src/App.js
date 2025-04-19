import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// The brain of our todo app - handles everything
function App() {
  // Load saved todos or start fresh
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Keep track of our todos and search stuff
  const [todos, setTodos] = useState(initTodo.map((todo, index) => ({
    ...todo,
    originalPosition: todo.originalPosition ?? index // Remember where each todo started
  })));
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  // Mark todo as done/not done
  const toggleComplete = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.sno === todo.sno) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    
    // Done todos go to bottom, keep others in order
    const sortedTodos = [...updatedTodos].sort((a, b) => {
      if (a.completed === b.completed) {
        return a.originalPosition - b.originalPosition;
      }
      return a.completed ? 1 : -1;
    });
    
    setTodos(sortedTodos);
  }

  // Look for specific todos
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);
  };

  // Show matching todos while searching
  const filteredTodos = isSearching 
    ? todos.filter(todo => 
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todos;

  // Add a new todo
  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false,
      originalPosition: todos.length
    }
    setTodos([...todos, myTodo]);
  }

  // Save todos when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
          {/* Home page */}
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={filteredTodos} onDelete={onDelete} onToggle={toggleComplete} />
            </>
          } />
          {/* About page */}
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
