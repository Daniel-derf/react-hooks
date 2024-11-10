import './App.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
    <h1>React Hooks</h1>
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
    </ul>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
