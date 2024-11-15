import styles from './Comments.module.css'
import React from 'react'
import Comment from '../../components/Comment/Comment'
import { useSelector } from 'react-redux'
import userLight from '../../resources/userLight.png'
import user from '../../resources/user.png'

const Comments = () => {

    const {comments, status, error} = useSelector(state=> state.post);
    const isDarkMode = useSelector(state=> state.ui.isDarkMode);


    if(status==='loading'){
        return <p>Loading...</p>
    }

    if(status==='failed'){
        return <p>Error: {error}</p>
    }

  return (
    <div className='Comments' style={{maxWidth: '756px'}}>
        <ul>
      {comments.map((comment)=>(
        <li key={comment.id} style={{listStyle: 'none', maxWidth: '100%'}}>
            <Comment
                user={comment.author}
                userPicture={isDarkMode? user: userLight}
                posted={comment.created_utc}
                text={comment.body}
                replies={comment.replies?.data?.children || [] }
                noVotes={comment.ups-comment.downs}
            ></Comment>
        </li>
      ))}
        </ul>
    </div>
  )
}

export default Comments
