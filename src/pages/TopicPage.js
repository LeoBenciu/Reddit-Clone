import React from 'react'
import SecondaryHomepage from '../containers/ SecondaryHomePage/SecondaryHomepage';

const TopicPage = () => {

    const {subredditName} = useParams();
    const dispatch = useDispatch();
    const {subredditInfo, status, error} = useSelector(state=> state.subredditDetails);

    useEffect(()=>{
        if(subredditName){
          
            dispatch(fetchSubredditDetails(subredditName));
            dispatch(setCurrentContent(`r/${subredditName}`));
          
        }
    },[dispatch,subredditName]);

    useEffect(() => {
      if (subredditName && subredditInfo) {
          const iconURL = subredditInfo.icon_img;
          dispatch(addSubreddit({ name: subredditName, iconURL }));
      }
  }, [dispatch, subredditName, subredditInfo]);

    if(status==='loading'){
        return <p>Loading...</p>
    }
    if(status==='failed'){
        return<p>Error: {error}</p>
    }
  return (
    <div className='SubredditPage' style={{width: '1088px', padding: '0', boxSizing: 'border-box', height: 'max-content'}}>
      <TopicHeader/>

      <div style={{display: 'flex', flexDirection: "row", height: '100%', paddingTop:'50px'}}>
        <Feed content={`r/${subredditName}`}/>

        <Secondary content={<SecondaryHomepage/>}/>

      </div>

    </div>
  )
}

export default TopicPage
