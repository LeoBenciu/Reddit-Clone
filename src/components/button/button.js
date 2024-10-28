import React from 'react'
import styles from './button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({text, onClick, icon, style}) {
  return (
    <div>
      <button style={style} onClick={onClick} className={styles.button}>
        <FontAwesomeIcon icon={icon} style={{fontSize: '20px'}}/>
        {text}
      </button>
    </div>
  )
}

export default Button;
