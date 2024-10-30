import React from 'react'
import CardsCarousel from '../containers/CardsCarousel/CardsCarousel'
import Feed from '../containers/Feed/Feed';
import Secondary from '../containers/Popular/Secondary';
import SecondaryHomepage from '../containers/ SecondaryHomePage/SecondaryHomepage';

const HomePage = () => {
  return (
    <div className='HomePage' style={{width: '1100px', padding: '0', boxSizing: 'border-box', height: '100%'}}>
      <CardsCarousel/>

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'5px'}}>
        <Feed/>

        <Secondary content={<SecondaryHomepage/>}/>

      </div>

    </div>
  )
}

export default HomePage;
