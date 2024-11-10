import React from 'react'
import SecondaryHomepage from '../containers/ SecondaryHomePage/SecondaryHomepage';
import Feed from '../containers/Feed/Feed';
import Secondary from '../containers/Popular/Secondary';
import TopicHeader from '../containers/TopicHeader/TopicHeader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setSearchQuery } from '../redux/slices/SearchSlice2';
import SearchResults from '../containers/SearchResults/SearchResults';

const TopicPage = () => {

    const {topicName} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(topicName){
            dispatch(setSearchQuery(topicName));  
            console.log('cacatul de topic name', topicName); 
        }
    },[dispatch,topicName]);

  return (
    <div className='SubredditPage' style={{width: '1088px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <TopicHeader/>

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'50px'}}>
        <SearchResults/>

        <Secondary content={<SecondaryHomepage/>}/>

      </div>

    </div>
  )
}

export default TopicPage
