import React, { useState } from 'react'
import styles from './Comment.module.css'
import CommentButtons from './CommentButtons/CommentButtons'
import CommentContent from './CommentContent/CommentContent'
import CommentUpper from './CommentUpper/CommentUpper'
import { useSelector } from 'react-redux'
import userLight from '../../resources/userLight.png'
import userPicture from '../../resources/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateAComment from '../../containers/CreateAComment'

const Comment = ({user, userPicture, posted, text, noVotes, replies=false}) => {

    const isDarkMode = useSelector(state=> state.ui.isDarkMode);
    const [isHidden, setIsHidden]= useState(false);
    const [isReply,setIsReply]= useState(false);


    const handleReplyAdd = (comment)=>{
        replies.unshift(comment)
    }

    const handleHide = ()=>{
        setIsHidden(!isHidden);
    }

    const toggleReply = ()=>{
        setIsReply(!isReply);
    }

    if(!user){
        return ;
    }

  return (
    <div className='CommentContainer' style={{ minWidth: '100%',maxWidth: '100%'}}>

    <div className='Comment' style={{ maxWidth: '100%'}}>
      <CommentUpper user={user} userPicture={userPicture} posted={posted}></CommentUpper>
      <div className='Row' style={{display: 'flex', flexDirection:'row', minWidth: '100%', maxWidth: '100%', overflow: 'hidden'}}>
      <div className='Connection' style={{minWidth:'16px', marginLeft: '8px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', padding: '0 0 15px 0'}}>
      {replies && replies.length > 0 && (<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <div className='InnerConnection' style={{minWidth: '1px', maxWidth: '1px', backgroundColor:'#979EA1', height: !isHidden? '48%':'90%'}}></div>
        <button className={styles.hideBtn} onClick={handleHide}>
                <FontAwesomeIcon icon={isHidden? faPlus: faMinus} style={{color: 'var(--text_one)'}}/>
        </button>
        {!isHidden&&(<div className='InnerConnection' style={{minWidth: '1px', maxWidth: '1px', backgroundColor:'#979EA1', height: '48%'}}></div>)}
        </div> )}   
      </div>
      <div className='Comment Content' style={{minWidth: '90%', maxWidth: '100%'}}>
      <CommentContent text={text}></CommentContent>
      <CommentButtons noVotes={noVotes} toggleReply={toggleReply}></CommentButtons>
      <CreateAComment noButton={true} isReply={isReply} toggleReply={toggleReply} handleReplyAdd={handleReplyAdd}></CreateAComment>
      {!isHidden&&(<ul style={{listStyle: 'none'}}>
      {replies&&(
        replies.map((comment,index)=>(
            <li key={index} style={{ display: 'flex', flexDirection: 'row', marginLeft: '16px'}}>
        
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
    </ul>)}
      </div>
      </div>

    </div>

    </div>
  )
}

export default Comment
