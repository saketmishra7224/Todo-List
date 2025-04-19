import React from 'react'

// Footer component fixed at bottom of page
export function Footer() {
    // Style for fixed positioning and red border
    const footerStyle = {
        position: "fixed",
        bottom: "0",
        width: "100%",
        border: "2px solid red"
    }

    return (
        // Dark themed footer with light text
        <div className="bg-dark text-light py-3" style={footerStyle}>
            <div className="container text-center">
                CopyRight &copy; MyTodosList.com
            </div>
        </div>
    )
}
