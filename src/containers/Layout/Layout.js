import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

const Layout = () => {
  return (
    <div id='Layout' style={{backgroundColor: '#0F1113', height: '100vh', maxHeight: '100vh', overflow: 'hidden'}}>
      <NavBar/>
      <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <SideBar style={{overflow: 'scroll'}}/>
      <Outlet style={{overflow: 'scroll'}}/>
      </div>
    </div>
  )
}

export default Layout
