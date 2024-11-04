import React from 'react'
import Header from './components/layoutBased/Header'
import Footer from './components/layoutBased/Footer'
import Home from './static/Home'
import Courses from './static/Courses'
import { Route, Routes } from 'react-router-dom'
import StaticLayout from './static/StaticLayout'

const App = () => {
  return (
      <StaticLayout>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      {/* <Footer /> */}
    </Routes>
      </StaticLayout>
  )
}

export default App