import React, { useState } from 'react';

// Form to add new todos
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // Handle form submit
    const submit = (e) => {
        e.preventDefault();
        // Make sure we have both title and description
        if(!title || !desc){
            alert("Oops! Please fill in both fields");
        }
        else{
            addTodo(title, desc);
            // Clear the form
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
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
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
