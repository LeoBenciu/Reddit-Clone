import React, { useEffect } from 'react'
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTheFeed } from '../../redux/slices/FeedSlice';

const Feed = () => {

  const dispatch = useDispatch();
  const { feed, error, status} = useSelector((state)=>state.feed);

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchTheFeed());
    }
  },[dispatch,status]);

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  if(status === 'failed'){
    return <p>Error: {error}</p>
  }
  
  return (
    <div className='Feed' style={{flex: '2.5', height:'100%', marginRight: '15px'}}>
      {feed.map((post,index)=>(
        <div className='Post'>
          <div className='line' style={{width: '100%',
            height: '1px',
            backgroundColor: '#23282b',
            margin: '4px 0'}}></div>
          <Post
          key={post.id}
          numberOfComments={post.num_comments} 
          upVotesMinusDownVotes={post.ups} 
          posted={post.posted} 
          subreddit={`r/${post.subreddit}`} 
          title={post.title} 
          linkTo={post.link}
          description={post.description} 
          media={post.media}
          id={post.id}>
          </Post>
        </div>
      ))}
    </div>
  )
}

export default Feed;
