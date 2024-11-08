import React, { useEffect } from 'react'
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTheFeed } from '../../redux/slices/FeedSlice';

const Feed = ({content}) => {

  const dispatch = useDispatch();
  const { feed, error, status} = useSelector((state)=>state.feed);

  var postWithMetadata = feed.find(post=> post.media_metadata);
  console.log(postWithMetadata);

  useEffect(()=>{
      dispatch(fetchTheFeed(content));
    
  },[dispatch,content]);

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  if(status === 'failed'){
    return <p>Error: {error}</p>
  }

  const extractImageUrls = (mediaMetadata) => {
    if (!mediaMetadata) return [];
  
    return Object.values(mediaMetadata).map((item) => {
    
      if (item.p && item.p.length > 0) {
        
        const url = item.p[4] ? item.p[4].u : item.p[item.p.length - 1].u;
        return url.replaceAll('&amp;', '&'); 
      }
      return null; 
    }).filter(Boolean);
  };
  
  
  return (
    <div className='Feed' style={{flex: '2.5', height:'100%', marginRight: '15px', marginBottom: '100px', minWidth: '756px', maxWidth: '756px'}}>
      {feed.map((post,index)=>{
        const imageUrls = extractImageUrls(post.media_metadata);
        const isVisible = post.isVisible;

        return(
        isVisible&&(<div className='Post' key={post.id}>
          <div className='line' style={{width: '100%',
            height: '1px',
            backgroundColor: '#23282b',
            margin: '4px 0'}}></div>
          <Post
          numberOfComments={post.num_comments} 
          upVotesMinusDownVotes={post.ups} 
          posted={post.created_utc} 
          subreddit={`r/${post.subreddit}`} 
          title={post.title} 
          images = {imageUrls} 
          user={post.author}
          image={(post.media_metadata || post.media) ? null : post.url}
          video={post.media?.reddit_video ? post.media.reddit_video.fallback_url : ''}
          id={post.id}
          linkTo={post}
          selfText={post.selftext? post.selftext: '' }
          userVote={post.userVote}
          isSaved = {post.isSaved}
          isReported = {post.isReported}
          >
          </Post>
        </div>)
      )})}
    </div>
  )
}

export default Feed;
