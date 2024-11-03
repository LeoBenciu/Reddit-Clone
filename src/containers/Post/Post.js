import React from 'react';
import PostButtons from '../../components/PostButtons/PostButtons';
import PostUpper from '../../components/PostUpper/PostUpper';
import PostContent from '../../components/PostContent/PostContent';
import styles from './Post.module.css'

const Post = ({numberOfComments, upVotesMinusDownVotes, posted, subreddit, title, description, media, linkTo,id}) => {

  const unixTimestamp = posted;
  const date = new Date(unixTimestamp* 1000);
  console.log(date);

  return (
    <div className={styles.Post} >
      <PostUpper posted={posted} subreddit={subreddit} id={id}></PostUpper>
      <PostContent 
      title={title} 
      description={description} 
      media={media}
      linkTo={linkTo}></PostContent>
      <PostButtons 
      upVotesMinusDownVotes={upVotesMinusDownVotes} 
      numberOfComments={numberOfComments}></PostButtons>
    </div>
  )
}

export default Post;
