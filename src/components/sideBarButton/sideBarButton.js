import React from 'react'
import styles from './sideBarButton.module.css'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


const SideBarButton = () => {

  const navigate = useNavigate();

  return (
    <button className={styles.btn} onClick={()=>navigate('/')}>
        <FontAwesomeIcon icon={faChartLine} style={{ width: '20px', height: '20px', padding: '0 15px' }}/>
        <p style={{ margin: '11px' }}>Popular</p>
    </button>
  )
}

export default SideBarButton
