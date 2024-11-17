import React, { useState } from 'react';
import styles from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const PostContent = ({ title, video, images = [], image = null, selfText, richText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const displayImage = image || (images.length > 0 ? images[currentIndex] : null);

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
    if (!url) return false;
    return /^data:image\/.*/.test(url) || /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i.test(url);
 };

  return (
    <div className={styles.PostContent}>
      <h2 className={styles.title}>{title}</h2>
      
      {displayImage && !imageError && (
        <div className={styles.containerImage}>
          {images.length > 1 && (
            <button onClick={goToPrevImage} className={styles.arrowButton}>
              <FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleLeft}/>
            </button>
          )}
          <div className={styles.containerImage} style={{'--background-image': `url(${displayImage})`}}>
            <img
              src={displayImage}
              alt={`Post image ${currentIndex + 1}`}
              className={styles.images}
              onError={handleImageError}
            />
          </div>
          {images.length > 1 && (
            <button onClick={goToNextImage} className={styles.arrowButton}>
              <FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleRight}/>
            </button>
          )}
        </div>
      )}


      {video && (
        <video className={styles.containerImage} autoPlay muted controls>
          <source className={styles.image} src={video} type="video/mp4" />
        </video>
      )}

      {selfText && <ReactMarkdown className={styles.selfText}>{selfText}</ReactMarkdown>}
      {richText && <div className={styles.div}>{parse(richText)}</div>}
    </div>
  );
};

export default PostContent;
