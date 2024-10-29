import React from 'react'
import styles from './GetAppPopup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../redux/slices/UiSlice';
import photo from '../../resources/photo.png'

const GetAppPopup = () => {

    const dispatch = useDispatch();

    const handleGetAppPopupClose = ()=>{
        dispatch(closePopup('getAppPopup'))
    }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>

        <div className={styles.popupHeader}>
            <h2 style={{
                color: 'white',
                fontSize: '30px'
            }}>Get the Reddit app</h2>
            <button onClick={handleGetAppPopupClose}><FontAwesomeIcon icon={faXmark}/></button>
        </div>

        <div className={styles.content}>
            <h4>Scan this QR code to download the app now</h4>
            <img src={photo} style={{
                width: '200px',
                height: '200px'
            }}/>
            <p>Or check it out in the app stores</p>
            <div>
                <button>

                </button>

                <button>

                </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default GetAppPopup;
