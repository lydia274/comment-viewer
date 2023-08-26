import React, { useState } from "react"

const Colorizer = () => {
  const colors = ["#FF5733", "#FFC300", "#4CAF50", "#2196F3", "#9C27B0"]
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const handleColorChange = () => {
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
  }

  return (
    <div className="color-picker" style={{ backgroundColor }}>
      <div className="color-button" onMouseOver={handleColorChange}></div>
    </div>
  )
}

export default Colorizer
