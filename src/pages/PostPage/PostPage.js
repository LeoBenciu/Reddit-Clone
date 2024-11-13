import React, { useEffect } from 'react'
import Secondary from '../../containers/Popular/Secondary'
import SecondSubreddit from '../../containers/SecondSubreddit/SecondSubreddit'
import styles from './PostPage.module.css'
import Post from '../../containers/Post/Post.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubredditDetails } from '../../redux/slices/SubredditDetailsSlice.js'
import Comments from '../../containers/Comments/Comments.js'
import { fetchComments } from '../../redux/slices/ PostSlice.js'

const PostPage = () => {

  const post = useSelector(state=>state.post.postDetails);
  console.log(post)
  const dispatch = useDispatch();
  const subredditInfo = useSelector(state=>state.subredditDetails.subredditInfo);
  console.log(post.subreddit,post.id)

  useEffect(()=>{
    dispatch(fetchSubredditDetails(post.subreddit));
    dispatch(fetchComments({subreddit: post.subreddit, postId: post.id}))
  },[])

  const imageUrls = '';

  return (
    <div className='PostPage' style={{width: '1100px', padding: '5px 0 0 0', boxSizing: 'border-box', height: 'max-content'}}>
      <div className={styles.row}>

        <div style={{
          flex: '2.5',
          height:'100%',
          marginRight: '15px',
          marginBottom: '100px',
          minWidth: '756px',
          maxWidth: '756px',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Post 
        numberOfComments={post.numberOfComments} 
        upVotesMinusDownVotes={post.upVotesMinusDownVotes} 
        posted={post.posted} 
        subreddit={post.subreddit} 
        title={post.title} 
        images = {post.images} 
        image={post.image}
        video={post.video? post.video : ''}
        id={post.id}
        linkTo={post.linkTo}
        selfText={post.selfText? post.selfText: '' }
        userVote={post.userVote}
        isSaved = {post.isSaved}
        isReported = {post.isReported}
        ></Post>
        <Comments></Comments>
        </div>

        <Secondary content={<SecondSubreddit 
        title={subredditInfo?subredditInfo.title: ''} 
        description={subredditInfo?subredditInfo.public_description: ''} 
        created={subredditInfo?subredditInfo.created_utc: ''}
        members={subredditInfo?subredditInfo.subscribers:''}
        membersActive={subredditInfo?subredditInfo.accounts_active:''}
        markdown={subredditInfo? subredditInfo.description:''}
        isPost={true}
        />}></Secondary>

      </div>
    </div>
  )
}

export default PostPage
