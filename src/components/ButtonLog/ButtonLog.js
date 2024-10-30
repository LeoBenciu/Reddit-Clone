import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ButtonLog.module.css'

const ButtonLog = ({text, onClick, icon, type}) => {
  return <button className={styles.button} type={type} onClick={onClick}><FontAwesomeIcon icon={icon} className={styles.buttonIcon}/><span  className={styles.buttonText}>{text}</span></button>
}

export default ButtonLog;
