import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import SubredditHeader from '../containers/SubredditHeader/SubredditHeader';
import Post from '../containers/Post/Post';
import backgroundImage from '../resources/backgroundImage.svg'

const SavedPostsPage = () => {

    const dispatch = useDispatch();
    const savedPosts = useSelector(state=> state.feed.savedPosts);

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
    <div className='SavedPostsPage' style={{width: '1088px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <SubredditHeader 
      bannerImage={backgroundImage}
      subredditName='Saved Posts'
      hideButtonsAndSubredditImage='yes'
      />

      <div style={{display: 'flex', flexDirection: "column", height: '100%', paddingTop:'50px', maxWidth: '756px', justifyContent: 'center', margin: '50px auto 100px auto'}}>
        {savedPosts.map((post,index)=>{

            const imageUrls = extractImageUrls(post.media_metadata)

            return(
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
            isSaved={post.isSaved}
            hide ="remove"
            report ="remove"
            ></Post>
        )}
        )}

      </div>

    </div>
  )
}

export default SavedPostsPage
