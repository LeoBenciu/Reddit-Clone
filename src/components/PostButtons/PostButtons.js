import React from 'react'
import styles from './PostButtons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

const PostButtons = ({upVotesMinusDownVotes, numberOfComments}) => {
  return (
    <div  className='PostButtons'>
    
      <div className={styles.postButtons}>
        <button className={styles.upButtons}><FontAwesomeIcon icon={faArrowUp}/></button>
        {upVotesMinusDownVotes}
        <button className={styles.downButton}><FontAwesomeIcon icon={faArrowDown}/></button>
      </div>
      <button className={styles.postButtons}><FontAwesomeIcon icon={faComment}/>{numberOfComments}</button>
      <button className={styles.postButtons}><FontAwesomeIcon icon={faShare}/>Share</button>

    </div>
  )
}

export default PostButtons
