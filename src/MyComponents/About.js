import React from 'react'

// About page info
export const About = () => {
    return (
        <div className="container my-3">
            <h3>About Todo List</h3>
            <p>Hey there! This is a simple todo app to help you stay organized.</p>
            <p>Here's what you can do:</p>
            <ul>
                <li>Add tasks you need to get done</li>
                <li>Mark tasks as complete when you finish them</li>
                <li>Search for specific tasks when your list gets long</li>
                <li>Remove tasks you don't need anymore</li>
            </ul>
            <p>Your tasks are saved automatically, so they'll be here next time you visit!</p>
        </div>
    )
}
