import React from 'react'
import styles from './PostContent.module.css'

const PostContent = ({title, description, media, linkTo}) => {
  return (
    <div className={styles.PostContent}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img className={styles.images}></img>
      <a href={linkTo} target="_blank" className={styles.linkTo}>{linkTo}</a>
      <video className={styles.video}></video>
    </div>
  )
}

export default PostContent;
