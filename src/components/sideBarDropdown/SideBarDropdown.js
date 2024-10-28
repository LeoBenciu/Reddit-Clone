import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SideBarDropdown.module.css';
import { useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SideBarDropdown = ({items, title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () =>{
        setIsOpen((prevState)=> !prevState);
    }

    const handleNavigation = (url)=>{
        window.open(url, '_blank')
    }

  return (
    <div className='dropdown-button' style={{height: '40px'}}>

        <button onClick={handleDropdown} className={styles.handleDropdown}>
            {title}
            <FontAwesomeIcon icon={faAngleDown} className={`${styles.arrowIcon} ${isOpen? styles.arrowDown : ''}`}/>
        </button>

        {isOpen&&(
            <ul className='dropdown-menu' style={{listStyleType: 'none'}}>
                {items.map((item, index)=>(
                    <li key={index} onClick={()=>handleNavigation(item.url)} className={styles.li}>
                            <FontAwesomeIcon icon={item.icon} style={{width: '20px', height: '20px', padding: '0 15px'}}/>
                            <p style={{margin: '11px'}}>{item.name}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default SideBarDropdown
