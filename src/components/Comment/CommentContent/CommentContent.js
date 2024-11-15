import React from 'react'
import styles from './CommentContent.module.css'
import  ReactMarkdown  from 'react-markdown';

const CommentContent = ({text}) => {
  return (
      <ReactMarkdown className={styles.text} style={{margin: '0px'}}>{text}</ReactMarkdown>
  )
}

export default CommentContent
