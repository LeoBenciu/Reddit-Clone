import React from 'react'
import styles from './GetAppPopup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../redux/slices/UiSlice';
import photo from '../../resources/photo.png'
import googlePlayBadge from '../../resources/googlePlayBadge.svg'
import appStoreBadge from '../../resources/appStoreBadge.webp'

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
                color: 'var(--text_one)',
                fontSize: '30px',
                margin: '0'
            }}>Get the Reddit app</h2>

            <button onClick={handleGetAppPopupClose} className={styles.buttonX} style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                border: 'none',
                backgroundColor: 'var(--background_three)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}><FontAwesomeIcon icon={faXmark} className={styles.iconX} style={{
                width: '50%',
                height: '50%',
                color: 'var(--text_one)',

            }}/></button>
        </div>

        <div className={styles.content}>
            <h4 style={{color:'var(--text_one)'}}>Scan this QR code to download the app now</h4>
            <img src={photo} style={{
                width: '200px',
                height: '200px'
            }}/>
            <p style={{color:'var(--text_one)'}}>Or check it out in the app stores</p>
            <div className={styles.storeButtons}>
                <a href="https://apps.apple.com/app/reddit/id1064216828" target="_blank" rel="noopener noreferrer">
                    <img src={appStoreBadge} alt="Download on the App Store" style={{ width: '150px', marginRight: '10px' }} />
                </a>

                
                <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage" target="_blank" rel="noopener noreferrer">
                    <img src={googlePlayBadge} alt="Get it on Google Play" style={{ width: '150px' }} />
                </a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default GetAppPopup;
