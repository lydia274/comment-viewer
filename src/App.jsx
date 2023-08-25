import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" // Import BrowserRouter

import "./App.css"
import Home from "./pages/Home/Home"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ColorPicker from "./components/ColorPicker"
import About from "./pages/About/About"

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Routes>
        {" "}
        {/* Use Routes component to define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
      </Routes>
      <Footer />
      <ColorPicker />
    </Router>
  )
}

export default App
