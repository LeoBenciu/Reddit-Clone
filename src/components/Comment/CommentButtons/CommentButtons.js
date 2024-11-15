import React, {useState} from 'react'
import ButtonForComment from '../ButtonForComment'
import { faArrowDown, faArrowUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

const CommentButtons = ({noVotes, toggleReply}) => {

    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    
    const handleUpvote = ()=>{
      setDownVote(false);
      setUpVote(!upVote);
    }
  
    const handleDownvote = ()=>{
      setUpVote(false);
      setDownVote(!downVote);
    }

    const userVote = upVote ? 1 : (downVote? -1 : 0);
  return (
    <div className='CommentButtons' style={{display: 'flex', alignItems: 'center', margin: '3px 0', padding: '5px 15px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonForComment icon={faArrowUp} round={true} onClick={handleUpvote} color={upVote ? 'var(--primary_color)' : 'var(--text_one)'}/>
        <p style={{color: 'var(--text_one)', fontSize: '12px', fontWeight: '600'}}>{ (noVotes? noVotes: 0) + userVote}</p>
        <ButtonForComment icon={faArrowDown} round={true} onClick={handleDownvote} color={downVote? 'var(--secondary_color)' : 'var(--text_one)'}/>
      </div>
      <ButtonForComment icon={faComment} text='Reply' color='var(--text_one)' onClick={toggleReply}/>
    </div>
  )
}

export default CommentButtons
