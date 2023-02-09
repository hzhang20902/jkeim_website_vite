import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Bio from './components/Bio'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Bio />} />
            <Route path="/contact" element={<Register />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
