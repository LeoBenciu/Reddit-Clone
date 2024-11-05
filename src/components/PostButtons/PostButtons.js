import React, {useState} from 'react'
import styles from './PostButtons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

const PostButtons = ({upVotesMinusDownVotes, numberOfComments,link}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  function format (element){
    if(element>999999){
      element =`${Math.round(element/1000000)}M`;
    } else if(element > 999){
      element = `${Math.round(element/ 1000)}K`;
    } else{
      element = element;
    }
    return element;
  }

  var formattedComments = format(numberOfComments);
  var formattedVotes = format(upVotesMinusDownVotes);

  


  return (
    <div  className='PostButtons' style={{display: 'flex', flexDirection: 'row', justifyContent:'start', gap: '15px'}}>
    
      <div className={styles.postButtons}>
        <button className={styles.upButton}><FontAwesomeIcon icon={faArrowUp} style={{width: '16px', height: '16px'}}/></button>
        {formattedVotes}
        <button className={styles.downButton}><FontAwesomeIcon icon={faArrowDown} style={{width: '16px', height: '16px'}}/></button>
      </div>
      <button className={styles.commentsButton}><FontAwesomeIcon icon={faComment} style={{width: '16px', height: '16px'}}/>{formattedComments}</button>
      <button className={styles.shareButton} onClick={handleCopyLink}>{isCopied? ('Link Copied') : (<><FontAwesomeIcon icon={faShare} style={{width: '16px', height: '16px'}}/>Share </>)}</button>

    </div>
  )
}

export default PostButtons
