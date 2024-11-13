import React, {useRef, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/slices/UiSlice'
import LoginPopup from '../LoginPopup/LoginPopup'
import GetAppPopup from '../GetAppPopup/GetAppPopup1'
import styles from './Layout.module.css'
import { saveJoinedSubreddits } from '../../utils/localStorage'
import ScrollContext from '../../contexts/ScrollContext'

const Layout = () => {
  const scrollContainerRef = useRef(null);
  const dispatch = useDispatch();
  const isGetAppPopupOpen = useSelector((state)=>state.ui.popups['getAppPopup']);
  const isLoginPopupOpen = useSelector((state)=>state.ui.popups['loginPopup']);
  const isUserLoggedIn = useSelector((state)=>state.user.isAuthenticated);
  const joinedSubreddits = useSelector((state)=>state.subreddits.joinedSubreddits);

  useEffect(()=>{
    saveJoinedSubreddits(joinedSubreddits);
    console.log(`Pulirie${joinedSubreddits}`);
  },[joinedSubreddits])


  const handleOpenLoginPopup = () =>{
    dispatch(openPopup('loginPopup'));
  }

  const handleOpenGetAppPopup = () =>{
    dispatch(openPopup('getAppPopup'));
  }


  return (
    <div id='Layout' style={{backgroundColor: 'var(--body_background)', height: '100vh', maxHeight: '100vh', position: 'relative'}}>
      <NavBar handleOpenGetAppPopup={handleOpenGetAppPopup} handleOpenLoginPopup={handleOpenLoginPopup} isUserLoggedIn={isUserLoggedIn}/>

      {isGetAppPopupOpen&& <GetAppPopup/>}

      {isLoginPopupOpen&& <LoginPopup isUserLoggedIn={isUserLoggedIn}/>}

      <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <SideBar />
        <div ref={scrollContainerRef} style={{ flex: 1, overflow: 'auto', display: 'flex', justifyContent: 'center', height: '100%' }} className={styles.Content} scrollContainerRef={scrollContainerRef}>
          <ScrollContext.Provider value={scrollContainerRef}>
            <Outlet />
          </ScrollContext.Provider>
        </div>
      </div>

    </div>
  )
}

export default Layout
