import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './transparentBackgroundButton.module.css';

const TransparentBackgroundButtons = ({name , icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
        <FontAwesomeIcon icon={icon} style={{
            color: 'var(--text_one)',
            width: '20px',
            height: '20px'
        }}/>

        {name&&(
        <p style={{
            color: 'var(--text_one)',
            margin: '0',
            fontSize: '14px',
            fontWeight: '600'
        }}>{name}</p>
    )}

    </button>
  )
}

export default TransparentBackgroundButtons
