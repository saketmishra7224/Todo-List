import React from 'react'

// About page component with app info and features
export function About() {
    return (
        <div className="container my-3">
            {/* App description */}
            <h3>Todo List App</h3>
            <p>
                A simple but effective way to keep track of your tasks.
                Add what you need to do, check them off as you go, 
                and remove them when done.
            </p>

            {/* Feature list */}
            <div className="my-4">
                <h5>What you can do:</h5>
                <ul>
                    <li>Add and organize tasks</li>
                    <li>Mark tasks as complete</li>
                    <li>Remove finished tasks</li>
                    <li>Find tasks with search</li>
                    <li>Your tasks save automatically</li>
                </ul>
            </div>

            {/* Tech stack info */}
            <div className="mt-4">
                <p className="text-muted mb-0">
                    Built with React and Bootstrap
                </p>
            </div>
        </div>
    )
}
