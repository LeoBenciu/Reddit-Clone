import React from 'react'
import styles from './SecodSubreddit.module.css'

const SecondSubreddit = () => {
  return (
    <div>

      <div className={styles.topRow}>
        <h4></h4>
        <button></button>
      </div>

      <div className={styles.description}>
        <h5></h5>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.membersNumber}></div>
        <div className={styles.onlineNumber}></div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.communityBookmarks}>
        <h5></h5>
        <button></button>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.rules}>
        <h5></h5>
        <dropdown></dropdown>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.moderators}>
        <h5></h5>
        
      </div>

    </div>
  )
}

export default SecondSubreddit
