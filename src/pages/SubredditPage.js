import React, { useEffect } from 'react'
import Secondary from '../containers/Popular/Secondary'
import Feed from '../containers/Feed/Feed'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentContent } from '../redux/slices/FeedSlice'
import SubredditHeader from '../containers/SubredditHeader/SubredditHeader'
import SecondSubreddit from '../containers/SecondSubreddit/SecondSubreddit'
import { fetchSubredditDetails } from '../redux/slices/SubredditDetailsSlice'

const SubredditPage = () => {

    const {subredditName} = useParams();
    const dispatch = useDispatch();
    const {subredditInfo, status, error} = useSelector(state=> state.subredditDetails);

    useEffect(()=>{
        if(subredditName){
        dispatch(fetchSubredditDetails(subredditName));
        dispatch(setCurrentContent(`r/${subredditName}`));
        }
    },[dispatch,subredditName]);

    if(status==='loading'){
        return <p>Loading...</p>
    }
    if(status==='failed'){
        return<p>Error: {error}</p>
    }
  return (
    <div className='SubredditPage' style={{width: '1088px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <SubredditHeader 
      bannerImage={subredditInfo?subredditInfo.banner_img: ''} 
      subredditImage={subredditInfo?subredditInfo.icon_img: ''} 
      subredditName={subredditInfo?subredditInfo.display_name_prefixed:''}
      />

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'50px'}}>
        <Feed content={`r/${subredditName}`}/>

        <Secondary content={<SecondSubreddit 
        title={subredditInfo?subredditInfo.title: ''} 
        description={subredditInfo?subredditInfo.public_description: ''} 
        created={subredditInfo?subredditInfo.created_utc: ''}
        members={subredditInfo?subredditInfo.subscribers:''}
        membersActive={subredditInfo?subredditInfo.accounts_active:''}
        markdown={subredditInfo? subredditInfo.description:''}
        />}/>

      </div>

    </div>
  )
}

export default SubredditPage
