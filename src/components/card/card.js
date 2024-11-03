import React from 'react';

const Card = ({ title, picture, paragraph }) => {
  return (
    <div
      className="Card"
      style={{
        position: 'relative',
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '210px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '15px',
        gap: '7px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '20px',
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h3 style={{ margin: '0' }}>{title}</h3>
        <p style={{ margin: '0', fontSize: '14px' }}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
