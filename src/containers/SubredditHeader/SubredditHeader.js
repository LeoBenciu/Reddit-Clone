import React from 'react'
import styles from './SubredditHeader.module.css'
import TransparentBackgroundButtons from '../../components/transparentBackgroundButtons/transparentBackgroundButtons'
import { faBell, faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons'
import image from '../../resources/poza.jpeg'
import rSvg from '../../resources/r.svg'

const SubredditHeader = ({bannerImage, subredditImage = image, subredditName = 'r/subredditname'}) => {
  return (
    <div className={styles.SubredditHeader}>

        <div className={styles.banner} style={{background: bannerImage? `url(${bannerImage})`: '#1A282E', height: bannerImage? '136px': '64px'}}>
            <div className={styles.bannerContent}>
                <div className={styles.leftReddit}>
                    <img className={styles.subredditImage} src={subredditImage ? subredditImage: rSvg} style={{backgroundColor: 'black'}}></img>
                    <h1 className={styles.subredditName}>{subredditName}</h1>
                </div>

                <div className={styles.rightButtons}>
                    <TransparentBackgroundButtons name='Create Post' icon={faPlus}/>
                    <button className={styles.joinButton}>Join</button>
                    <TransparentBackgroundButtons icon={faBell}/>
                    <TransparentBackgroundButtons name='Joined'/>
                    <TransparentBackgroundButtons icon={faEllipsis}/>
                </div>
            </div>
        </div>

       
    </div>
  )
}

export default SubredditHeader
