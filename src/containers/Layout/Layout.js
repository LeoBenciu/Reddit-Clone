import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/slices/UiSlice'
import LoginPopup from '../LoginPopup/LoginPopup'
import GetAppPopup from '../GetAppPopup/GetAppPopup1'

const Layout = () => {
  const dispatch = useDispatch();
  const isGetAppPopupOpen = useSelector((state)=>state.ui.popups['getAppPopup']);
  const isLoginPopupOpen = useSelector((state)=>state.ui.popups['loginPopup'])

  const handleOpenLoginPopup = () =>{
    dispatch(openPopup('loginPopup'));
  }

  const handleOpenGetAppPopup = () =>{
    dispatch(openPopup('getAppPopup'));
  }

  return (
    <div id='Layout' style={{backgroundColor: '#0F1113', height: '100vh', maxHeight: '100vh', position: 'relative'}}>
      <NavBar handleOpenGetAppPopup={handleOpenGetAppPopup} handleOpenLoginPopup={handleOpenLoginPopup}/>

      {isGetAppPopupOpen&& <GetAppPopup/>}

      {isLoginPopupOpen&& <LoginPopup/>}

      <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <SideBar />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Layout
