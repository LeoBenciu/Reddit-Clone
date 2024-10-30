import React from 'react'

const CommunityItem = ({name, members, image}) => {
  return (
    <div className='CommunityItem' style={{display: 'flex', flexDirection: 'row', height: '50px', alignItems:'center', gap:'10px', padding: '28px 0'}}>
      <img style={{width: '33px', height: '33px', borderRadius: '50%', border: 'none'}} src={image}></img>

      <div className='data'>
        <p style={{color:'white',margin: '0', fontSize: '15px', color: '#C1D3DD'}}>{name}</p>
        <p style={{color: 'white', margin: '0', fontSize: '11.5px', color: '#72838D'}}>{members}  members</p>
      </div>
    </div>
  )
}

export default CommunityItem
