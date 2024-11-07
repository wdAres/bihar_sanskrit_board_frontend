import React, { useState } from 'react'
import Header from '../components/layoutBased/Header'
import Footer from '../components/layoutBased/Footer'
import Sidebar from '../components/layoutBased/Sidebar'

const StaticLayout = ({children}) => {

  const [sidebar,setSidebar] = useState(false)

  const openSidebar = () => setSidebar(true)
  const closeSidebar = () => setSidebar(false)

  return (
    <>
    <Header openSidebar={openSidebar} />
    <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
    {children}
    <Footer />
    </>
  )
}

export default StaticLayout