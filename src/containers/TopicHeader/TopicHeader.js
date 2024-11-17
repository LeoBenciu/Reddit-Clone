import React from 'react';
import styles from './TopicHeader.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopicHeader = ({query}) => {

  const results = useSelector(state=> state.search.results)

  const {topicName} = useParams();

  return (
    <div className={styles.TopicHeader}>
      <h1 style={{color: 'var(--text_one)'}}>{query? (results.length>0?'Results':'No results found'):topicName}</h1>
      <p style={{color: 'var(--text_one)'}}>{query? `For "${query}"`: 'Topic on Reddit'}</p>
    </div>
  )
}

export default TopicHeader
