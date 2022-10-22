import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import Logement from './pages/Logement'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import '../src/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Logement/:id" element={<Logement />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
