import React from 'react';
import PostButtons from '../../components/PostButtons/PostButtons';
import PostUpper from '../../components/PostUpper/PostUpper';
import PostContent from '../../components/PostContent/PostContent';
import styles from './Post.module.css'
import PostSearchUpper from '../../components/PostSearchUpper/PostSearchUpper';
import PostSearchButtons from '../../components/PostSearchButtons/PostSearchButtons';
import { useSelector } from 'react-redux';

const Post = ({numberOfComments, upVotesMinusDownVotes, posted, subreddit, title, selfText, images, image, video, linkTo,id, userVote, isSaved, isReported, hide, report,search}) => {

  return (
    <div className={styles.Post} >

    {!search&&(<PostUpper posted={posted} subreddit={subreddit} id={id} isSaved={isSaved} isReported={isReported} hide={hide} report={report}></PostUpper>)}
    {search&&(<PostSearchUpper posted={posted} subreddit={subreddit} id={id} isSaved={isSaved} isReported={isReported} hide={hide} report={report}/>
      )}
      
      <PostContent 
      title={title} 
      selfText={selfText} 
      video={video}
      images={images}
      image={image}></PostContent>

      {!search&&(<PostButtons 
      upVotesMinusDownVotes={upVotesMinusDownVotes} 
      numberOfComments={numberOfComments}
      linkTo={linkTo}
      postId={id}
      userVote={userVote}
      ></PostButtons>)}
      {search&&(<PostSearchButtons 
      upVotesMinusDownVotes={upVotesMinusDownVotes} 
      numberOfComments={numberOfComments}
      linkTo={linkTo}
      postId={id}
      userVote={userVote}
      />)}


    </div>
  )
}

export default Post;
