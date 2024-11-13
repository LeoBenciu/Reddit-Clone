import React from 'react'
import styles from './CommentButtons.module.css'
import ButtonForComment from '../ButtonForComment'
import { faArrowDown, faArrowUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

const CommentButtons = () => {
  return (
    <div className='CommentButtons' style={{display: 'flex', alignItems: 'center', margin: '3px 0', padding: '5px 15px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonForComment icon={faArrowUp} round={true}/>
        <p style={{color: 'var(--text_one)', fontSize: '12px', fontWeight: '600'}}>Vote</p>
        <ButtonForComment icon={faArrowDown} round={true}/>
      </div>
      <ButtonForComment icon={faComment} text='Reply'/>
      <ButtonForComment icon={faShare} text='Share'/>
    </div>
  )
}

export default CommentButtons
