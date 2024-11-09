import React from 'react'
import styles from './SecondSubreddit.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCake, faCircleDot, faGlobe } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'

const SecondSubreddit = ({title, description, created,members, membersActive, markdown}) => {

    const date = new Date(created * 1000);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short', // e.g., Apr
        day: 'numeric', // e.g., 10
        year: 'numeric', // e.g., 2008
      });

    const transformNumbers = (number)=>{
        if (number > 999999) {
            return `${(number / 1000000).toFixed(1)}M`;
        } else if (number > 999) {
            return `${(number / 1000).toFixed(1)}K`;
        } else {
            return number.toString();
        }
    }

    const membersNr = transformNumbers(members);
    const activeMembersNr = transformNumbers(membersActive);

  return (
    <div style={{height: '830px', overflowY: 'scroll'}}>

      <div className={styles.description}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.descriptionText}>{description}</p>
        <p className={styles.plittle}><FontAwesomeIcon icon={faCake} className={styles.icons}/> Created {formattedDate}</p>
        <p className={styles.plittle}><FontAwesomeIcon icon={faGlobe} className={styles.icons}/>Public</p>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.onlineNumber}>
            <h5 style={{margin: '0', color: 'var(--text_one)',fontSize: '14px'}}>{membersNr}</h5>
            <p style={{margin:'0', color: '#979EA1',fontSize: '12px'}}>Members</p>
        </div>
        <div className={styles.onlineNumber}>
            <h5 style={{margin: '0', color: 'var(--text_one)',fontSize: '14px'}}>{activeMembersNr}</h5>
            <p style={{margin:'0', color:'#979EA1',fontSize: '12px', height: '15px'}}><FontAwesomeIcon icon={faCircleDot} style={{color: membersActive>0? 'green': 'red'}}/> Online</p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.communityBookmarks}>
        <ReactMarkdown className={styles.markdownContent}>{markdown}</ReactMarkdown>
      </div>

    </div>
  )
}

export default SecondSubreddit
