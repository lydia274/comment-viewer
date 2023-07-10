import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  const [count, setCount] = useState(0)

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
