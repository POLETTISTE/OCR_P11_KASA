import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/styles/main.scss'
import About from './pages/About'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
