import React, { useState } from 'react'

// Form component for adding new todos to the list
export const AddTodo = ({ addTodo }) => {
    // Track form input values
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    // Handle form submission
    const submit = (e) => {
        e.preventDefault()
        // Make sure we have both title and description
        if(!title || !desc) {
            alert("Oops! Please fill in both fields")
            return
        }
        // Add the new todo and reset form
        addTodo(title, desc)
        setTitle("")
        setDesc("")
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                {/* Title input field */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Todo Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control" 
                        id="title" 
                        placeholder="Enter todo title" 
                    />
                </div>

                {/* Description input field */}
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label fw-bold">Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control" 
                        id="desc" 
                        placeholder="Enter todo description"
                    />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-sm btn-success">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
