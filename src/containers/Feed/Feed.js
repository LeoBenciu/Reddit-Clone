import React, { useEffect, useRef } from 'react'
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTheFeed, loadMoreFeed } from '../../redux/slices/FeedSlice';
import ScrollContext from '../../contexts/ScrollContext';
import { useLayoutEffect, useContext } from 'react';
import { loadCurrentPostDetails, saveCurrentPostDetails } from '../../utils/localStorage';
import { Link } from 'react-router-dom'
import { savePostDetails } from '../../redux/slices/ PostSlice';

const Feed = ({content}) => {

  const scrollPositionRef = useRef(0);
  const dispatch = useDispatch();
  const { feed, error, status} = useSelector((state)=>state.feed);
  const scrollContainerRef = useContext(ScrollContext);

  useEffect(()=>{
      dispatch(fetchTheFeed(content));
  },[dispatch,content]);

 useLayoutEffect(()=>{
  if(scrollContainerRef.current){
    scrollPositionRef.current = scrollContainerRef.current.scrollTop;
  }
 });

  useLayoutEffect(()=>{
    if(scrollContainerRef.current){
      scrollContainerRef.current.scorllTop = scrollPositionRef.current;
    }
  }, [feed]);

  if(status === 'loading' && feed.length === 0){
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
    <div className='Feed' style={{
      flex: '2.5',
      height:'100%',
      marginRight: '15px',
      marginBottom: '100px',
      minWidth: '756px',
      maxWidth: '756px',
      display: 'flex',
      flexDirection: 'column',
      }}>
      {feed.map((post,index)=>{
        const imageUrls = extractImageUrls(post.media_metadata);
        const isVisible = post.isVisible;
        const postDetailsToSave = {numberOfComments: post.num_comments,
          upVotesMinusDownVotes: post.ups, 
          posted:post.created_utc,
          subreddit:`r/${post.subreddit}`,
          title:post.title,
          images:imageUrls,
          image:(post.media_metadata || post.media) ? null : post.url,
          video:post.media?.reddit_video ? post.media.reddit_video.fallback_url : '',
          id:post.id,
          linkTo:post.permalink,
          selfText:post.selftext? post.selftext: '' , 
          userVote:post.userVote, 
          isSaved:post.isSaved, 
          isReported:post.isReported};
        return(
        isVisible&&(<div className='Post' key={post.id}>
          <div className='line' style={{width: '100%',
            height: '1px',
            backgroundColor: 'var(--lines)',
            margin: '4px 0'}}></div>
          <Link to={`/comments/${post.id}`} style={{textDecoration: 'none'}}>   
          <Post
          numberOfComments={post.num_comments} 
          upVotesMinusDownVotes={post.ups} 
          posted={post.created_utc} 
          subreddit={`r/${post.subreddit}`} 
          title={post.title} 
          search={false}
          images = {imageUrls} 
          image={(post.media_metadata || post.media) ? null : post.url}
          video={post.media?.reddit_video ? post.media.reddit_video.fallback_url : ''}
          id={post.id}
          linkTo={post.permalink}
          selfText={post.selftext? post.selftext: '' }
          userVote={post.userVote}
          isSaved = {post.isSaved}
          isReported = {post.isReported}
          onClick={()=>dispatch(savePostDetails(postDetailsToSave))}
          >
          </Post>
          </Link>
        </div>)
      )})}

      <button 
      style={{
        margin: '40px auto 0 auto',
        borderRadius: '10px',
        width: '100px',
        height: '35px',
        backgroundColor: 'var(--text_one)',
        color: 'var(--rev_text_one)',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none'
      }}
      onClick={()=>{
        dispatch(loadMoreFeed());
        dispatch(fetchTheFeed(content));
      }}
      >Load More</button>
    </div>
  )
}

export default Feed;
