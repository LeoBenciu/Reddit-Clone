import React, { useEffect } from 'react'
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../../redux/slices/SearchSlice2';

const SearchResults = () => {

  const dispatch = useDispatch();
  const { results, error, status, query} = useSelector((state)=>state.search);

  useEffect(()=>{
      dispatch(fetchSearchResults(query));
  },[dispatch, query]);

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

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  if(status === 'failed'){
    return <p>Error: {error}</p>
  }
  
  return (
    <div className='SearchResults' style={{flex: '2.5', height:'100%', marginRight: '15px', marginBottom: '100px', minWidth: '756px', maxWidth: '756px'}}>
      {results.map((post,index)=>{
        const isVisible = post.isVisible;
        const imageUrls = extractImageUrls(post.media_metadata);

        return(
        isVisible&&(<div className='Post' key={post.id}>
          <div className='line' style={{width: '100%',
            height: '1px',
            backgroundColor: 'var(--lines)',
            margin: '4px 0'}}></div>
          <Post
          numberOfComments={post.num_comments} 
          upVotesMinusDownVotes={post.ups} 
          posted={post.created_utc} 
          subreddit={`r/${post.subreddit}`} 
          title={post.title} 
          images={imageUrls}
          image={(post.media_metadata || post.media) ? null : post.url}
          video={post.media?.reddit_video ? post.media.reddit_video.fallback_url : ''}
          id={post.id}
          linkTo={post.permalink}
          selfText={post.selftext? post.selftext: '' }
          userVote={post.userVote}
          isSaved = {post.isSaved}
          isReported = {post.isReported}
          search={true}
          >
          </Post>
        </div>)
      )})}
    </div>
  )
}

export default SearchResults;
