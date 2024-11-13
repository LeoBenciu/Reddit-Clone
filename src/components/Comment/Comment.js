import React from 'react'
import styles from './Comment.module.css'
import CommentButtons from './CommentButtons/CommentButtons'
import CommentContent from './CommentContent/CommentContent'
import CommentUpper from './CommentUpper/CommentUpper'
import { useSelector } from 'react-redux'
import userLight from '../../resources/userLight.png'
import userPicture from '../../resources/user.png'

const Comment = ({user, userPicture, posted, text, noReplies, noVotes, replies}) => {

    const isDarkMode = useSelector(state=> state.ui.isDarkMode)

  return (
    <div className='CommentContainer'>

    <div className='Comment' style={{}}>
      <CommentUpper user={user} userPicture={userPicture} posted={posted}></CommentUpper>
      <div className='Row' style={{display: 'flex', flexDirection:'row'}}>
      <div className='Connection' style={{width:'16px', marginLeft: '10px', backgroundColor: 'red'}}></div>
      <div className='Comment Content'>
      <CommentContent text={text}></CommentContent>
      <CommentButtons noReplies={noReplies} noVotes={noVotes}></CommentButtons>
      <ul style={{listStyle: 'none'}}>
      {replies&&(
        replies.map((comment,index)=>(
            <li key={index} style={{ display: 'flex', flexDirection: 'row'}}>
                <div className='Connect' style={{
                    minHeight: '100%', 
                    minWidth: '16px', 
                    maxWidth: '16px'
                    }}>
                        <div style={{width: '16px', height: '16px', border: 'solid 1px green', borderTop: 'none', borderRight: 'none'}}></div>
                </div>
                <Comment
                    user={comment.data.author}
                    userPicture={ userPicture}
                    posted={comment.data.created_utc}
                    text={comment.data.body}
                    replies={comment.data.replies?.data?.children || []}
                    noVotes={comment.ups-comment.downs}
                ></Comment>
            </li>
        ))
    )}
    </ul>
      </div>
      </div>

    </div>

    </div>
  )
}

export default Comment
