import React, { useEffect, useRef } from 'react';
import styles from '../PostUpper/PostUpper.module.css';
import poza from '../../resources/r.svg';
import poza2 from '../../resources/r-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faEyeSlash, faFlag, faSave } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, openPopup } from '../../redux/slices/UiSlice';
import { formatDistanceToNowStrict } from '../../../node_modules/date-fns/formatDistanceToNowStrict';
import { hidePost, toggleReport, toggleSave } from '../../redux/slices/SearchSlice2';

const PostSearchUpper = ({ subreddit, posted, id, isSaved, isReported, hide, report }) => {
  const dispatch = useDispatch();
  const popId = `postPop-${id}`;
  const isPopVisible = useSelector((state) => state.ui.popups[popId]);
  const popRef = useRef(null);
  const isDarkMode = useSelector(state=>state.ui.isDarkMode);

  const handleHideButton = ()=>{
    dispatch(hidePost(id));
  }

  const handleReportButton=()=>{
    dispatch(toggleReport(id));
  }

  const handleSaveButton= ()=>{
    dispatch(toggleSave(id));
  }

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

  const date = new Date(posted * 1000);
  const timeAgo = formatDistanceToNowStrict(date, {addSuffix: true});

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
        <img className={styles.subredditImage} src={isDarkMode?poza:poza2} alt="Subreddit" />
        <h4 className={styles.subredditName}>{subreddit}</h4>
        <p className={styles.posted}>
          <span style={{ color: 'transparent' }}>..</span>•<span style={{ color: 'transparent' }}>..</span>
          {timeAgo}
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
                  <button className={styles.moreButtons} style={{ borderRadius: '10px 10px 0 0' }} onClick={handleSaveButton}>
                    {isSaved?
                    <>
                    <FontAwesomeIcon
                      style={{ color: '#149EF5', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faSave}
                    />
                    <span style={{color: '#149EF5', fontWeight: '600'}}>Saved</span>
                    </>
                    :<><FontAwesomeIcon
                      style={{ color: 'var(--text_one)', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faSave}
                    />
                    Save</>}
                  </button>
                </li>
                <li>
                  {hide!=='remove'&&(<button className={styles.moreButtons} onClick={handleHideButton}>
                    <FontAwesomeIcon
                      style={{ color: 'var(--text_one)', marginRight: '15px', width: '20px', height: '20px' }}
                      icon={faEyeSlash}
                    />
                    Hide
                  </button>)}
                </li>
                <li>
                  {report!=='remove'&&(<button className={styles.moreButtons} style={{ borderRadius: '0 0 10px 10px' }} onClick={handleReportButton}>
                    {isReported?<><FontAwesomeIcon style={{ color: 'red', marginRight: '15px', width: '20px', height: '20px' }} 
                    icon={faFlag}
                    /><span style={{fontWeight: '600', color: 'red'}}>Reported</span></>:
                    <><FontAwesomeIcon style={{ color: 'var(--text_one)', marginRight: '15px', width: '20px', height: '20px' }} icon={faFlag}/> <span>Report</span></>}
                  </button>)}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostSearchUpper;
