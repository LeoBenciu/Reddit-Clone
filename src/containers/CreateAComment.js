import React,{useState, useRef, useEffect, Children } from 'react'
import styles from './CreateAComment.module.css'
import { addAComment } from '../redux/slices/ PostSlice';
import { useDispatch } from 'react-redux';

const CreateAComment = ({noButton, isReply, toggleReply, handleReplyAdd}) => {

    const [isTextarea, setIsTextarea] = useState(false);
    const [comment, setComment] = useState('');
    const textareaRef =  useRef(null);
    const dispatch = useDispatch();
    const comentariu = {
        author: 'Me',
        created_utc: Math.floor(Date.now() /1000),
        body: comment,
        ups: 0,
        downs: 0,
        replies: {
            data:{
                children: []
            }
        }
    }

    const handleOpenTextarea  = ()=>{
        setIsTextarea(true);
    };

    const handleCloseTextarea = ()=>{
        setIsTextarea(false);
        setComment('');
    }

    const handleCommentChange = (e)=>{
        setComment(e.target.value);
        adjustTextareaHeight();
    }

    const adjustTextareaHeight = ()=>{
        const textarea = textareaRef.current; 
        if(textarea){
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }

    const handleSubmitBtn = ()=>{
        dispatch(addAComment(comentariu));
        setIsTextarea(false);
        setComment('');
    }

    const handleReplySubmitBtn = ()=>{
        handleReplyAdd(comentariu);
        setIsTextarea(false);
        setComment('');
    }

    useEffect(()=>{
        if(isTextarea){
            adjustTextareaHeight();
        }
    },[comment,isTextarea])

  return (
    <div className='CreateAComment'
    style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '10px auto'
    }}>

      {!isTextarea&& !noButton&&(<button className='InputButton' style={{
        background: 'transparent',
        border: 'solid',
        borderColor: '#979EA1',
        color: '#979EA1',
        borderRadius: '30px',
        height: '42px',
        width: '100%',
        padding: '.5rem 1rem',
        textAlign: 'start',
        cursor: 'pointer'
      }}
        onClick={handleOpenTextarea}>Add a comment</button>)}

      {(isTextarea || isReply)&&(
      <div className='Text Area' style={{
        margin: '0 10px',
        border: 'solid #979EA1',
        borderRadius:'15px'}}>
      <textarea className={styles.textarea}
        autoFocus
       ref={textareaRef}
       value={comment}
       onChange={handleCommentChange}
      style={{
        border: 'none',
        width: '100%',
        borderRadius: '15px',
        overflow: 'hidden',
        resize:'none',
        minHeight: '40px',
        boxSizing: 'border-box',
        height:'auto',
        backgroundColor: 'transparent',
        color: 'var(--text_one)',
        padding: '10px'
      }} rows={1}></textarea>
      <div className='Row Buttons' style={{display: 'flex',
         flexDirection: 'row',
          width: '100%', 
          justifyContent:'flex-end',
          padding: '0 10px',
          marginBottom: '10px',
          gap:'10px'
          }}>
        <button onClick={isReply? toggleReply: handleCloseTextarea} 
        className={styles.textareaBtn}
        style={{
            backgroundColor:'var(--background_two)',
            color: 'white'
        }}>Cancel</button>
        <button onClick={isReply? handleReplySubmitBtn : handleSubmitBtn}
            disabled={!comment.trim()}
            className={styles.textareaBtn}
            style={{
                color: 'white'
            }}>Comment</button>
      </div>
      </div>
)}
    </div>
  )
}

export default CreateAComment
