import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ButtonForComment.module.css'

const ButtonForComment = ({icon, text, round}) => {
  return (
    <button className={round? styles.buttonRound : styles.button} >
        <FontAwesomeIcon icon={icon} style={{color: 'var(--text_one)'}}></FontAwesomeIcon>
        <p style={{color: 'var(--text_one)', fontSize: '12px', fontWeight: '600'}}>{text}</p>
    </button>
  )
}

export default ButtonForComment
