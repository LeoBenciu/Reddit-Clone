import React from 'react';
import PostButtons from '../../components/PostButtons/PostButtons';
import PostUpper from '../../components/PostUpper/PostUpper';
import PostContent from '../../components/PostContent/PostContent';
import styles from './Post.module.css'

const Post = ({numberOfComments, upVotesMinusDownVotes, posted, subreddit, title, selfText, images, user, image, video, linkTo,id, userVote, isSaved, isReported, hide, report}) => {


  return (
    <div className={styles.Post} >
      <PostUpper posted={posted} subreddit={subreddit} id={id} user={user} isSaved={isSaved} isReported={isReported} hide={hide} report={report}></PostUpper>
      <PostContent 
      title={title} 
      selfText={selfText} 
      video={video}
      images={images}
      image={image}></PostContent>
      <PostButtons 
      upVotesMinusDownVotes={upVotesMinusDownVotes} 
      numberOfComments={numberOfComments}
      linkTo={linkTo}
      postId={id}
      userVote={userVote}
      ></PostButtons>
    </div>
  )
}

export default Post;
