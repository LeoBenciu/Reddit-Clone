import React, { useEffect, useRef, useState } from 'react';
import styles from '../PostUpper/PostUpper.module.css';
import poza from '../../resources/r.svg';
import poza2 from '../../resources/r-light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faEyeSlash, faFlag, faSave } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, openPopup } from '../../redux/slices/UiSlice';
import { formatDistanceToNowStrict } from '../../../node_modules/date-fns/formatDistanceToNowStrict';
import { hidePost, toggleReport, toggleSave } from '../../redux/slices/SearchSlice2';
import { joinSubreddit, unjoinSubreddit } from '../../redux/slices/SubredditsSlice';
import { toggleSavePost } from '../../redux/slices/ PostSlice';
import { saveSavedPostIds } from '../../utils/localStorage';

const PostSearchUpper = ({ subreddit, posted, id, hide, report, isSaved, isReported }) => {
  const dispatch = useDispatch();
  const popId = `postPop-${id}`;
  const isPopVisible = useSelector((state) => state.ui.popups[popId]);
  const popRef = useRef(null);
  const isDarkMode = useSelector(state=>state.ui.isDarkMode);
  const joinedList = useSelector(state=> state.subreddits.joinedSubreddits);



  const handleHideButton = ()=>{
    dispatch(hidePost(id));
  }

  const handleReportButton=()=>{
    dispatch(toggleReport(id));
  }

  const handleSaveButton= ()=>{
    saveSavedPostIds([id]);
  }

  const handleMoreClick = (event) => {
    event.stopPropagation();
    if (isPopVisible) {
      dispatch(closePopup(popId));
    } else {
      dispatch(openPopup(popId));
    }
  };

  const handleJoinButton = ()=>{
    dispatch(joinSubreddit(subreddit));
  }

  const handleUnjoinButton = () =>{
    dispatch(unjoinSubreddit(subreddit));
  }

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
      className="BigRow2"
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
        {!joinedList.includes(subreddit)&&(<button className={styles.buttonJoin} onClick={handleJoinButton}>Join</button>)}
        {joinedList.includes(subreddit)&&(<button className={styles.buttonJoin} style={{background: '#139ef5'}} onClick={handleUnjoinButton}>Joined</button>)}
      </div>
    </div>
  );
};

export default PostSearchUpper;
