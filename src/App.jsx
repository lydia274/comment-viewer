import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <main>
        <header>
          <Header />
          <p>bim</p>bimbim
        </header>
        <div className="users-field"></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
