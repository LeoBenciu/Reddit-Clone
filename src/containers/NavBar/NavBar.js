import React from 'react';
import Button from '../../components/button/button';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { faQrcode, faEllipsis, faSave } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function NavBar({handleOpenLoginPopup, handleOpenGetAppPopup,isUserLoggedIn}) {

  const savedPosts = useSelector(state=> state.feed.savedPosts);
  const navigate = useNavigate();

  return (
    <div id='NavBar' style={{
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0.3rem 2rem',
      height: '50px',
      borderBottom: 'solid 1px #393B3C',
    }}>
      <Logo/>

      <SearchBar/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px'
      }}>

        {savedPosts.length>0&&
        (<Button style={{backgroundColor: '#149EF5'}} text='Saved' icon={faSave} onClick={()=>navigate('/Saved-Posts')}></Button>)
        }

        <Button style={{backgroundColor: '#2B3236'}} text="Get app" icon={faQrcode} onClick={handleOpenGetAppPopup}/>

        <Button style={{backgroundColor: '#149EF5', display: isUserLoggedIn? 'none': 'flex'}} text="Log In" onClick={handleOpenLoginPopup}/>

      </div>
    </div>
  )
}

export default NavBar;
