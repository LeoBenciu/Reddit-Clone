import React from 'react'
import RedditLogo from '../../resources/RedditLogo.svg';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={RedditLogo} alt='reddit-logo' className={styles['logo-image']}></img>
      <h1 style={{fontSize: '1.7rem', color: 'white'}}>reddit</h1>
    </div>
  )
}

export default Logo
