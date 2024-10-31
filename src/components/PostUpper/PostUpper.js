import React from 'react'
import styles from './PostUpper.module.css'
import poza from '../../resources/poza.jpeg'

const PostUpper = ({subreddit, posted}) => {
  return (
    <div>
      <div className={styles.line}></div>
      <div className={styles.row}>
        <img className={styles.subredditImage} src={poza}></img>
        <h4 className={styles.subredditName}>{subreddit}</h4>
        <p className={styles.posted}>• {posted}</p>
      </div>
    </div>
  )
}

export default PostUpper;
