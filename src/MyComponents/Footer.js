import React from 'react'

// Simple footer that sticks to the bottom
export const Footer = () => {
  // Keep footer at bottom
  let footerStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    border: "2px solid red"
  }

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        CopyRight &copy; MyTodosList.com
      </p>
    </footer>
  )
}
