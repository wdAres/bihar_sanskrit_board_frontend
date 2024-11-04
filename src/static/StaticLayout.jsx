import React from 'react'
import Header from '../components/layoutBased/Header'
import Footer from '../components/layoutBased/Footer'

const StaticLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default StaticLayout