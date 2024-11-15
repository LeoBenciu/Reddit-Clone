import React from 'react';
import Button from '../../components/button/button';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { faQrcode, faEllipsis, faSave, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDarkMode } from '../../redux/slices/UiSlice';
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loadSavedPostIds } from '../../utils/localStorage';


function NavBar({handleOpenLoginPopup, handleOpenGetAppPopup,isUserLoggedIn}) {

  const savedPosts = useSelector(state=> state.feed.feed.filter(p=> p.isSaved));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state=> state.ui.isDarkMode);

  const handleToggleBtn = ()=>{
    dispatch(setDarkMode());
  }

  return (
    <div id='NavBar' style={{
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0.3rem 2rem',
      height: '50px',
      borderBottom: 'solid 1px var(--lines)',
    }}>
      <Logo/>

      <SearchBar/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px'
      }}>

        <button onClick={handleToggleBtn} className={isDarkMode ? styles.toggleBtn1:styles.toggleBtn2}>
          <FontAwesomeIcon icon={faMoon} className={styles.moon}/>
          <div className={styles.thumb}></div>
          <FontAwesomeIcon icon={faSun} className={styles.sun}/>
        </button>

        {savedPosts.length>0&&
        (<Button style={{backgroundColor: '#149EF5'}} text='Saved' icon={faSave} onClick={()=>navigate('/Saved-Posts')}></Button>)
        }

        <Button style={{backgroundColor: 'var(--background_three)', color: 'var(--text_one)'}} text="Get app" icon={faQrcode} onClick={handleOpenGetAppPopup}/>

        <Button style={{backgroundColor: '#149EF5', display: isUserLoggedIn? 'none': 'flex'}} text="Log In" onClick={handleOpenLoginPopup}/>

      </div>
    </div>
  )
}

export default NavBar;
