import React from 'react'
import styles from './SecondaryHomePage.module.css'
import CommunityItem from '../../components/communityItem/communityItem'
import poza from '../../resources/photo.png'
import photo from '../../resources/poza.jpeg'
import { useDispatch, useSelector} from 'react-redux'
import { toggleSecondary } from '../../redux/slices/UiSlice'

const SecondaryHomepage = () => {

    const dispatch = useDispatch();
    const isSecondaryOpen = useSelector((state)=> state.ui.isSecondaryOpen);

    const communities = [
        {name: 'r/AskMen', members: '19000', icon: poza},
        {name: 'r/apple', members: '1243', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: poza},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
        {name: 'r/PS4', members: '3423423', icon: photo},
    ]

  return (
    <div  className='content' style={{height: '100%', width: '100%', display:'flex', flexDirection: 'column'}}>
      <div style={{height: '35px', display:'flex', flexDirection: 'row', alignItems:'center', color: '#979EA1', width: '100%', justifyContent: 'flex-start', padding: '0 15px'}}>
        <h5  style={{fontWeight: '550', fontSize: '12px'}}>POPULAR COMMUNITIES</h5>
      </div>

      <div className={styles.listOfCommunities} style={{height: isSecondaryOpen ? 'max-content': '300px', overflow: 'hidden'}}>
        {communities.map((community,index)=>(
            <CommunityItem key={index} name={community.name} image={community.icon} members={community.members}/>
        ))}
      </div>

      <div style={{height: '35px', display:'flex', flexDirection: 'row', alignItems:'center', color: '#979EA1', width: '100%', justifyContent: 'flex-start', padding: '0 15px'}}>
        <button style={{backgroundColor: 'transparent', borderRadius: '30px', color: 'white', border: 'none',fontSize: '12px', fontWeight: '500'}} onClick={()=>dispatch(toggleSecondary())}>See more</button>
      </div>
    </div>
  )
}

export default SecondaryHomepage
