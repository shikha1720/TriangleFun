import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
//import Footer from '../Footer/Footer'

function Root() {
  return (
    <>
    <Navbar />
        <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Root
