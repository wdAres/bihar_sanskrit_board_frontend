import React, { useEffect } from 'react'
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
import History from './static/History'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Rules from './static/Rules'
import ScrollToTop from './components/Forms/ScrollToTop'
import AllNotice from './static/AllNotice'
import AllTender from './static/AllTender'
import AllImportantLinks from './static/AllImportantLinks'
import Cobse from './static/Cobse'


const App = () => {

  return (
    <StaticLayout>
      <ScrollToTop/>
      <Routes>
          
        <Route exact path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/authorised_centers' element={<AuthorisedCenters />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/results' element={<Results />} />
        <Route path='/notices' element={<AllNotice />} />
        <Route path='/tenders' element={<AllTender />} />
        <Route path='/important-links' element={<AllImportantLinks />} />
        <Route path='/about'>
          <Route exact path='/about/' element={<About />} />
          <Route exact path='/about/general_info' element={<About />} />
          <Route exact path='/about/cobse' element={<Cobse />} />
          <Route path='/about/chairman_message' element={<ChairmanMessage />} />
          <Route path='/about/history' element={<History />} />
          <Route path='/about/objectives' element={<Objectives />} />
          <Route path='/about/aim' element={<Vision />} />
          <Route path='/about/rules' element={<Rules />} />
        </Route>

      </Routes>
      <ToastContainer
        position='top-right'
        autoClose='1000'
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </StaticLayout>
  );
};

export default App;
