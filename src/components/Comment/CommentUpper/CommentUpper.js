import React from 'react'
import styles from './CommentUpper.module.css'
import { formatDistanceToNowStrict } from 'date-fns';

const CommentUpper = ({user, userPicture, posted}) => {

    const date = new Date(posted * 1000);
    const timeAgo = posted? formatDistanceToNowStrict(date, {addSuffix: true}): '';

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
      <img src={userPicture} style={{height: '2rem', width:'2rem', borderRadius: '50%'}}></img>
      <p style={{color: 'var(--text_one)', fontSize: '12px', fontWeight: '600'}}>{user}</p>
      <p style={{ color: 'var(--text_two)', fontSize: '12px'}}>•   {timeAgo}   •</p>
    </div>
  )
}

export default CommentUpper
