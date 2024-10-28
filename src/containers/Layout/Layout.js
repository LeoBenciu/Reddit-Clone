import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div id='Layout' style={{backgroundColor: '#0F1113', height: '100vh'}}>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
