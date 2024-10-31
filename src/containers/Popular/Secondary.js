import React from 'react'
import styles from './Secondary.module.css'

const Secondary = ({title, content}) => {
  return (
    <div className='Secondary' style={{ flex: 1,height: '', minWidth: '315px', maxWidth: '315px'}}>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  )
}

export default Secondary
