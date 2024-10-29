import React from 'react'
import poza from '../../resources/poza.jpeg'

const Card = ({title, paragraph}) => {
  return (
    <div 
        className='Card' 
        style={{
            background: `url(${poza})`,
            filter: 'brightness(90%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            minHeight: '210px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            padding: '15px',
            gap: '7px'
    }}>
            <h3 style={{color: 'white', margin: '0', filter: 'brightness(1.2)'}}>{title}</h3>
            <p style={{color: 'white', margin: '0', fontSize: "14px", filter: 'brightness(1.2)'}}>{paragraph}</p>
    </div>
  )
}

export default Card;
