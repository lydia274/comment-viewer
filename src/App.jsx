import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" // Import BrowserRouter
import { comments } from "../src/commentData"
import "./App.css"
import Home from "./pages/Home/Home"
import Card from "../src/components/Card"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ColorPicker from "./components/ColorPicker"

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the entire application with BrowserRouter */}
      <header>
        <Header />
      </header>
      <Routes>
        {" "}
        {/* Use Routes component to define your routes */}
        <Route path="/" element={<Home />} /> {/* Define routes here */}
      </Routes>
      <div className="users-field">
        {comments.map((comment) => (
          <Card key={comment.username} commentObject={comment} />
        ))}
      </div>
      <footer>
        <Footer />
        <ColorPicker />
      </footer>
    </Router>
  )
}

export default App
