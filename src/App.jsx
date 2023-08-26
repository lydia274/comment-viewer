import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" // Import BrowserRouter
import "./App.css"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./pages/About/About"
import { useState } from "react"
import More from "./pages/More/More"

function App() {
  const colors = ["#FF5733", "#FFC300", "#4CAF50", "#2196F3", "#9C27B0"]
  const [backgroundColor, setBackgroundColor] = useState("#2196F3")

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const handleColorChange = () => {
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
  }

  return (
    <Router>
      <Header
        backgroundColor={backgroundColor}
        onColorChange={handleColorChange}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/more/" element={<More />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
