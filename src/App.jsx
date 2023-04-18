import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Schedule from './Schedule'
import Blog from './Blog'
import Pricing from './Pricing'
import Classes from './Classes'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Apply from './Apply'


function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Schedule' element={<Schedule />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Classes' element={<Classes />} />
      <Route path='/Apply' element={<Apply />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
