import React from 'react'
import styles from './PostContent.module.css'

const PostContent = () => {
  return (
    <div className={styles.PostContent}>
      <h2 className={styles.title}></h2>
      <p className={styles.description}></p>
      <img className={styles.images}></img>
      <link className={styles.link}></link>
      <video className={styles.video}></video>
    </div>
  )
}

export default PostContent;
