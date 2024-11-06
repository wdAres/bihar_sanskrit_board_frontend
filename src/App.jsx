import React, { useEffect } from 'react'
import Header from './components/layoutBased/Header'
import Footer from './components/layoutBased/Footer'
import Home from './static/Home'
import Courses from './static/Courses'
import { Route, Routes } from 'react-router-dom'
import StaticLayout from './static/StaticLayout'
import About from './static/About'
import ChairmanMessage from './static/ChairmanMessage'
import Objectives from './static/Objectives'
import Vision from './static/Vision'
import AuthorisedCenters from './static/AuthorisedCenters'
import Admissions from './static/Admissions'
import './App.css'  // Make sure to import your CSS file
import Contact from './static/Contact'
import Results from './static/Results'

const App = () => {

  return (
    <StaticLayout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/authorised_centers' element={<AuthorisedCenters />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/results' element={<Results />} />
        <Route path='/about'>
          <Route exact path='/about/' element={<About />} />
          <Route exact path='/about/general_info' element={<About />} />
          <Route path='/about/chairman_message' element={<ChairmanMessage />} />
          <Route path='/about/objectives' element={<Objectives />} />
          <Route path='/about/vision' element={<Vision />} />
        </Route>
      </Routes>
    </StaticLayout>
  );
};

export default App;
