import React from 'react'
import styles from './communityItem.module.css'
import { Link } from 'react-router-dom'

const CommunityItem = ({subredditName, members, image}) => {
  return (
    <Link to={`/${subredditName}`} className={styles.linkTo}>
    <div className={styles.CommunityItem} style={{display: 'flex', flexDirection: 'row', height: '50px', alignItems:'center', gap:'10px', padding: '28px 15px', borderRadius: '10px'}}>
      <img style={{width: '33px', height: '33px', borderRadius: '50%', border: 'none'}} src={image}></img>

      <div className='data'>
        <p style={{color:'white',margin: '0', fontSize: '15px', color: 'var(--text_two)'}}>{subredditName}</p>
        <p style={{color: 'white', margin: '0', fontSize: '11.5px', color: '#72838D'}}>{members}  members</p>
      </div>
    </div>
    </Link>
  )
}

export default CommunityItem
