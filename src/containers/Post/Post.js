import React from 'react';
import PostButtons from '../../components/PostButtons/PostButtons';
import PostUpper from '../../components/PostUpper/PostUpper';
import PostContent from '../../components/PostContent/PostContent';

const Post = ({numberOfComments, upVotesMinusDownVotes, posted, subreddit, title, description, media}) => {
  return (
    <div>
      <PostUpper posted={posted} subreddit={subreddit}></PostUpper>
      <PostContent></PostContent>
      <PostButtons></PostButtons>
    </div>
  )
}

export default Post;
