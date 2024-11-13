import React, { useState } from 'react';
import styles from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PostContent = ({ title, video, images = [], image = null, selfText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = (event) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = (event) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const imagesArray = Array.isArray(images) ? images : [];

  const isImageUrl = (url) => {
    return /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i.test(url);
  };

  return (
    <div className={styles.PostContent}>
      <h2 className={styles.title}>{title}</h2>
      
      {images.length > 0 && (
        <div className={styles.containerImage}>

          <button onClick={goToPrevImage} className={styles.arrowButton}><FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleLeft}/></button>

          <div className={styles.containerImage} style={{'--background-image': `url(${images[currentIndex]})`}}>
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className={styles.images}
            />
          </div>

          <button onClick={goToNextImage} className={styles.arrowButton}><FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleRight}/></button>
        </div>
      )}

      {isImageUrl(image) && !images.length && (
        <div className={styles.containerImage} style={{'--background-image': `url(${image})`}}>
          <img className={styles.image} src={image} alt=''></img>
        </div>
      )}

      {video && (
        <video className={styles.containerImage} autoPlay muted controls>
          <source className={styles.image} src={video} type="video/mp4" />
        </video>
      )}

      {selfText && <ReactMarkdown className={styles.selfText}>{selfText}</ReactMarkdown>}
    </div>
  );
};

export default PostContent;
