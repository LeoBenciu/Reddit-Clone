import React from 'react'
import RedditLogo from '../../resources/RedditLogo.svg';
import styles from './logo.module.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={()=>navigate('/')}>
      <img src={RedditLogo} alt='reddit-logo' className={styles['logo-image']}></img>
      <h1 style={{fontSize: '1.7rem', color: 'var(--logo)'}}>reddit</h1>
    </div>
  )
}

export default Logo
