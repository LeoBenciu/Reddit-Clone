import React,{useEffect, useRef} from 'react'
import CardsCarousel from '../containers/CardsCarousel/CardsCarousel'
import Feed from '../containers/Feed/Feed';
import Secondary from '../containers/Popular/Secondary';
import SecondaryHomepage from '../containers/ SecondaryHomePage/SecondaryHomepage';
import { setCurrentContent } from '../redux/slices/FeedSlice';
import { useDispatch } from 'react-redux';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setCurrentContent('r/popular'));
  },[dispatch])
  
  return (
    <div className='HomePage' style={{width: '1100px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <CardsCarousel/>

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'5px'}}>
        <Feed content='r/popular' />

        <Secondary content={<SecondaryHomepage/>}/>

      </div>

    </div>
  )
}

export default HomePage;
