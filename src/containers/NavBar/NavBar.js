import React from 'react';
import Button from '../../components/button/button';
import SearchBar from '../../components/searchBar/searchBar';
import Logo from '../../components/logo/logo';
import { faQrcode, faEllipsis } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div id='NavBar' style={{
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0.3rem 2rem',
      height: '50px',
      borderBottom: 'solid 1px #393B3C'
    }}>
      <Logo/>

      <SearchBar/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px'
      }}>
        <Button style={{backgroundColor: '#2B3236'}} text="Get app" icon={faQrcode}/>
        <Button style={{backgroundColor: '#149EF5'}} text="Log In"/>
        <Button style={{backgroundColor: 'transparent'}} icon={faEllipsis}/>
      </div>
    </div>
  )
}

export default NavBar;
