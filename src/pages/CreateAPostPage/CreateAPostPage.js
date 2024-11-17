import React,{useState} from 'react'
import styles from './CreateAPostPage.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './CreateAPage.css';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload, faX } from '@fortawesome/free-solid-svg-icons';
import { addPostForFeed, addPostInFeed, addPost } from '../../redux/slices/FeedSlice';
import { isVisible } from '@testing-library/user-event/dist/utils';

const CreateAPostPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content,setContent] = useState('');
  const {subredditName} = useParams();
  const [isImages,setImages] = useState(false);
  const [isLink,setLink] = useState(false);
  const [isText, setText] = useState(true);
  const[preview,setPreview] = useState(null);
  const [image,setImage] = useState(null);
  const [title,setTitle] = useState('');
  const [link, setTheLink] = useState('');

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onDrop = async (acceptedFiles)=>{
    if(acceptedFiles.length>0){
      const file  = acceptedFiles[0];
      const base64Image = await convertToBase64(file);
      setImage(base64Image);
      setPreview(base64Image)
    }
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
    maxSize: 5 * 1024 * 1024,
  });

  const handlePostButton=(e)=>{
      e.preventDefault();
      
      const post = {
        author: 'me',
        created_utc: Math.floor(Date.now()/1000),
        num_comments: 0,
        title: title,
        ups: 0,
        score: 0,
        subreddit: subredditName,
        media: image,
        permalink: `/r/${subredditName}/comments/${Date.now()}`,
        id: Date.now().toString(),
        richText: isLink? link:content,
        isSaved: false, 
        isReported: false,
        userVote: 0,
        isVisible: true,
      };

      dispatch(addPost(post));
      navigate(`/r/${subredditName}`);
  }

  const  handleTextBtn = ()=>{
    setText(true);
    setLink(false);
    setImages(false);
  };
  const  handleImagesBtn = ()=>{
    setText(false);
    setLink(false);
    setImages(true);
  };
  const  handleLinkBtn = ()=>{
    setText(false);
    setLink(true);
    setImages(false);
  };
  const handleImageChange = async (e) =>{
    const file = e.target.files[0];
    if(file){
      const base64Image = await convertToBase64(file);
      setImage(base64Image);
      setPreview(base64Image);
    }
  };
  const handleXPicture=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    setImage(null);
    setPreview(null);
  };

  return (
    <div className='CreateAPostPage' style={{width: '1088px', padding: '0 0 100px 0', boxSizing: 'border-box', overflow:'scroll'}}>
      <form className={styles.form} onSubmit={handlePostButton}>
        <h1 className={styles.Title}>Create post</h1>
        <p className={styles.redditName}>{`r/${subredditName}`}</p>
        <div className={styles.rowButtons}>
          <button className={styles.btn} onClick={handleTextBtn} type='button'>Text {isText&&(<div className={styles.line}></div>)}</button>
          <button className={styles.btn} onClick={handleImagesBtn} type='button'>Images {isImages&&(<div className={styles.line}></div>)}</button>
          <button className={styles.btn} onClick={handleLinkBtn} type='button'>Link {isLink&&(<div className={styles.line}></div>)}</button>
        </div>
        <div className={styles.inputContainer}>
        <input className={styles.titleInput} name='input' placeholder='Title' value={title} required onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        {isText&&(
        <ReactQuill
          id="editor"
          value={content}
          onChange={setContent}
          placeholder="Write something amazing..."
          className={styles.textEditor}
        />
)}

     {isLink&&( <input type='url' className={styles.titleInput} placeholder='Link URL' 
      onChange={(e)=>setTheLink(e.target.value)}
      value={link}
      style={{
      marginTop: '60px',
      marginBottom:'40px'}}></input>)}

      {isImages&&(
        <div
        {...getRootProps()}
        style={{
          border: '1px dashed var(--text_one)',
          borderRadius: '20px',
          padding: '20px',
          textAlign: 'center',
          margin: '10px 0',
          maxWidth: '677px',
          marginTop: '60px',
          marginBottom: '40px',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (!preview&&(
          <p style={{color: 'var(--text_one)'}} className={styles.textDrag}>
            Drag & drop an image here, or click to select a file   
            <span className={styles.uploadIcon}>
              <FontAwesomeIcon icon={faUpload}/>
            </span>
          </p>)
        )}
      {preview && <img src={preview} alt="Preview" width="670" />}
      {preview&& <button onClick={handleXPicture} type='button' className={styles.xPictureBtn}><FontAwesomeIcon icon={faTrash}/></button>}
      </div>
      )}

      <button className={styles.postButton} type='submit'>Post</button>

      </form>
    </div>
  )
}

export default CreateAPostPage
