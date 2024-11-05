
import React, { useEffect, useRef } from 'react';
import styles from './SecondaryHomePage.module.css';
import CommunityItem from '../../components/communityItem/communityItem';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSecondary } from '../../redux/slices/UiSlice';
import { fetchTheSubreddits } from '../../redux/slices/SubredditsSlice';
import redditLogo from '../../resources/Site-logo.webp';

const SecondaryHomepage = () => {
    const communitiesListRef = useRef(null);
    const dispatch = useDispatch();
    const isSecondaryOpen = useSelector((state) => state.ui.isSecondaryOpen);
    const { subreddits, error, status } = useSelector((state) => state.subreddits);

    const handleClick = () => {
        if (communitiesListRef.current) {
            communitiesListRef.current.scrollTo({ top: 0});
        }
        dispatch(toggleSecondary());
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTheSubreddits());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='content' style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '35px', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#979EA1', width: '100%', justifyContent: 'flex-start', padding: '0 15px' }}>
                <h5 style={{ fontWeight: '550', fontSize: '12px' }}>POPULAR COMMUNITIES</h5>
            </div>

            <div
                ref={communitiesListRef}
                className={styles.listOfCommunities}
                style={{ height: isSecondaryOpen ? '750px' : '300px', overflowY: isSecondaryOpen ? 'scroll' : 'hidden' }}
            >
                {subreddits.map((subreddit) => {
                    if(subreddit.icon_img){let members = subreddit.subscribers;

                    if (members > 999999) {
                        members = `${(members / 1000000).toFixed(1)}M`;
                    } else if (members > 999) {
                        members = `${(members / 1000).toFixed(1)}K`;
                    } else {
                        members = members.toString();
                    }

                    return (
                        <CommunityItem
                            key={subreddit.id}
                            subredditName={subreddit.display_name_prefixed}
                            image={subreddit.icon_img}
                            members={members}
                        />
                    );
                }})}
            </div>

            <div style={{ height: '35px', display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#979EA1', width: '100%', justifyContent: 'flex-start', padding: '0 15px' }}>
                <button onClick={handleClick} className={styles.seeMore}>
                    {isSecondaryOpen ? 'See less' : 'See more'}
                </button>
            </div>
        </div>
    );
};

export default SecondaryHomepage;
