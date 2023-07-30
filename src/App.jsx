import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { comments } from "../src/commentData"
import "./App.css"
import Home from "./pages/Home/Home"
import Card from "../src/components/Card"

import Header from "../src/components/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <header>
        <Header />
        <Home />
        <p>bim</p>bimbim
      </header>
      <div className="users-field">
        {comments.map((comment) => (
          <Card key={comment.username} commentObject={comment} />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
