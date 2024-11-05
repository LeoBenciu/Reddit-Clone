import React, { useEffect } from 'react'
import Secondary from '../containers/Popular/Secondary'
import Feed from '../containers/Feed/Feed'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentContent } from '../redux/slices/FeedSlice'
import SubredditHeader from '../containers/SubredditHeader/SubredditHeader'
import SecondSubreddit from '../containers/SecondSubreddit/SecondSubreddit'

const SubredditPage = () => {

    const {subredditName} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setCurrentContent(`r/${subredditName}`));
    },[dispatch,subredditName]);

  return (
    <div className='SubredditPage' style={{width: '1088px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <SubredditHeader/>

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'50px'}}>
        <Feed content={`r/${subredditName}`}/>

        <Secondary content={<SecondSubreddit/>}/>

      </div>

    </div>
  )
}

export default SubredditPage
