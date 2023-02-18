import { Route, Routes } from 'react-router-dom'
import './App.css'

import School from './components/School'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import Appbar from './components/menu/Appbar'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header>
        <Appbar />
      </header>
      <body>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<School />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
