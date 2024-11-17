import React, {useState} from 'react'
import styles from './SubredditHeader.module.css'
import TransparentBackgroundButtons from '../../components/transparentBackgroundButtons/transparentBackgroundButtons'
import { faBell, faEllipsis, faPlus } from '@fortawesome/free-solid-svg-icons'
import image from '../../resources/poza.jpeg'
import rSvg from '../../resources/r.svg'
import { useDispatch, useSelector } from 'react-redux'
import { joinSubreddit, unjoinSubreddit } from '../../redux/slices/SubredditsSlice'
import { useNavigate } from 'react-router-dom'

const SubredditHeader = ({bannerImage, subredditImage = image, subredditName = 'r/subredditname',hideButtonsAndSubredditImage}) => {

    const JoinedList = useSelector(state=>state.subreddits.joinedSubreddits);
    const dispatch = useDispatch();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate();

    const handleJoinButton =()=>{
        dispatch(joinSubreddit(subredditName));
    };

    const handleUnjoinButton =()=>{
        dispatch(unjoinSubreddit(subredditName));
    };

    const handleCreatePostBtn = () =>{
        navigate(`create-a-post`)
    };

  return (
    <div className={styles.SubredditHeader}>

        <div className={styles.banner} style={{background: bannerImage? `url(${bannerImage})`: '#1A282E', height: bannerImage? '136px': '64px'}}>
            <div className={styles.bannerContent}>
                <div className={styles.leftReddit}>
                    {hideButtonsAndSubredditImage!=='yes'&&(<img className={styles.subredditImage} src={subredditImage ? subredditImage: rSvg} style={{backgroundColor: 'black'}}></img>)}
                    <h1 className={styles.subredditName}>{subredditName}</h1>
                </div>

                {hideButtonsAndSubredditImage!=='yes'&&(<div className={styles.rightButtons}>
                    <TransparentBackgroundButtons name='Create Post' icon={faPlus} onClick={handleCreatePostBtn}/>
                    {!JoinedList.includes(subredditName)&&(<button onClick={handleJoinButton} className={styles.joinButton}>Join</button>)}
                    {JoinedList.includes(subredditName)&&(<TransparentBackgroundButtons icon={faBell}/>)}
                    {JoinedList.includes(subredditName)&&(<TransparentBackgroundButtons onClick={handleUnjoinButton} name='Joined'/>)}
                </div>)}
            </div>
        </div>

       
    </div>
  )
}

export default SubredditHeader
