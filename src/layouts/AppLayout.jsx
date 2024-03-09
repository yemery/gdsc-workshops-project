import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='flex flex-col h-screen  '>
      <Navbar />
      <div className='flex-1 mt-16 '>
      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout