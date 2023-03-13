import { Route, Routes } from 'react-router-dom'
import './App.css'

import School from './components/School'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import Appbar from './components/menu/Appbar'
import Contact from './components/Contact'
import ErrorPage from './components/Error'
import Shop from './components/Shop'

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
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
