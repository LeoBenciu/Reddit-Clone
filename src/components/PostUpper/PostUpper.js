import React, { useEffect, useRef } from 'react';
import styles from './PostUpper.module.css';
import poza from '../../resources/poza.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faEyeSlash, faFlag, faSave } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, openPopup } from '../../redux/slices/UiSlice';

const PostUpper = ({ subreddit, posted, id }) => {
  const dispatch = useDispatch();
  const popId = `postPop-${id}`;
  const isPopVisible = useSelector((state) => state.ui.popups[popId]);
  const popRef = useRef(null);

  const handleMoreClick = (event) => {
    event.stopPropagation();
    if (isPopVisible) {
      dispatch(closePopup(popId));
    } else {
      dispatch(openPopup(popId));
    }
  };

  const handleClickOutside = (event) => {
    if (popRef.current && !popRef.current.contains(event.target)) {
      dispatch(closePopup(popId));
    }
  };

  useEffect(() => {
    if (isPopVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPopVisible]);

  return (
    <div
      className="BigRow"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '8px',
        position: 'relative',
      }}
    >
      <div className={styles.row}>
        <img className={styles.subredditImage} src={poza} alt="Subreddit" />
        <h4 className={styles.subredditName}>{subreddit}</h4>
        <p className={styles.posted}>
          <span style={{ color: 'transparent' }}>..</span>•<span style={{ color: 'transparent' }}>..</span>
          {posted}
        </p>
      </div>
      <div className={styles.row}>
        <button className={styles.buttonJoin}>Join</button>
        <div ref={popRef} style={{ position: 'relative' }}>
          <button onClick={handleMoreClick} className={styles.buttonMore}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          {isPopVisible && (
            <div
              className={styles.pop}
              style={{ position: 'absolute', top: '100%', right: '0', zIndex: '1000' }}
            >
              <ul style={{ listStyle: 'none'}}>
                <li>
                  <button className={styles.moreButtons} style={{ borderRadius: '10px 10px 0 0' }}>
                    <FontAwesomeIcon
                      style={{ color: 'white', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faSave}
                    />
                    Save
                  </button>
                </li>
                <li>
                  <button className={styles.moreButtons}>
                    <FontAwesomeIcon
                      style={{ color: 'white', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faEyeSlash}
                    />
                    Hide
                  </button>
                </li>
                <li>
                  <button className={styles.moreButtons} style={{ borderRadius: '0 0 10px 10px' }}>
                    <FontAwesomeIcon
                      style={{ color: 'white', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faFlag}
                    />
                    Report
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostUpper;
