import React from 'react';
import styles from './TopicHeader.module.css';
import { useParams } from 'react-router-dom';

const TopicHeader = ({query}) => {

  const {topicName} = useParams();

  return (
    <div className={styles.TopicHeader}>
      <h1 style={{color: 'var(--text_one)'}}>{query?'Results':topicName}</h1>
      <p style={{color: 'var(--text_one)'}}>{query? `For "${query}"`: 'Topic on Reddit'}</p>
    </div>
  )
}

export default TopicHeader
