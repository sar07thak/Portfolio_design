import React from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact' 
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App