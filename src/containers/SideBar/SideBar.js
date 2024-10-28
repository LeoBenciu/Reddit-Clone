import React from 'react';
import SideBarDropdown from '../../components/sideBarDropdown/SideBarDropdown';
import SideBarButton from '../../components/sideBarButton/SideBarButton.js';
import styles from './SideBar.module.css';
import { faRocket, faRectangleAd, faCircleInfo, faUserDoctor, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
  const recent = [
    {},
    {},
    {},
  ];

  const topics = [];

  const resources = [
    { name: 'About Reddit', icon: faRocket, url: 'https://redditinc.com/' },
    { name: 'Advertise', icon: faRectangleAd, url: 'https://accounts.reddit.com/adsregister?utm_source=web3x_consumer&utm_name=left_nav_cta' },
    { name: 'Help', icon: faCircleInfo, url: 'https://support.reddithelp.com/hc/en-us?utm_campaign=evergreen&utm_medium=footer&utm_source=reddit' },
    { name: 'Blog', icon: faBloggerB, url: 'https://redditinc.com/blog' },
    { name: 'Careers', icon: faUserDoctor, url: 'https://redditinc.com/careers' },
    { name: 'Press', icon: faNewspaper, url: 'https://redditinc.com/press' },
  ];

  return (
    <div className={styles.hole}>
      <SideBarButton />
      <div className={styles['horizontal-line']} />
      <SideBarDropdown title='RECENT' />
      <div className={styles['horizontal-line']} />
      <SideBarDropdown title='TOPICS' items={topics} />
      <div className={styles['horizontal-line']} />
      <SideBarDropdown title='RESOURCES' items={resources} />
    </div>
  );
};

export default SideBar;
