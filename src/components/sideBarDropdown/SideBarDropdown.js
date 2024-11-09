import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './SideBarDropdown.module.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SideBarDropdown = ({ items = [], title, regular }) => {
    console.log('Here: ',items);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const handleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleNavigation = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className={styles.dropdownButton}>
            <button onClick={handleDropdown} className={styles.handleDropdown}>
                {title}
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`${styles.arrowIcon} ${isOpen ? styles.arrowDown : ''}`}
                />
            </button>

            <ul
                className={`${styles.dropdownMenu} ${isOpen ? styles.dropdownMenuOpen : ''}`}
                style={{ listStyleType: 'none' }}
            >
                {regular&&(items.map((item, index) => (
                    <li
                        key={index}
                        onClick={item.new ? () =>handleNavigation(item.url) : ()=>navigate(item.url)}
                        className={styles.li}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            style={{ width: '20px', height: '20px', padding: '0 15px' }}
                        />
                        <p style={{ margin: '11px' }}>{item.name}</p>
                    </li>
                )))}
                {!regular&&(
                    items.map((item, index)=>(
                        <Link to={`r/${item.name}`} style={{textDecoration: 'none'}}>
                            <li key={index} className={styles.li}>
                                <img src={item.iconURL} style={{width: '33px', height: '33px', borderRadius: '50%', border: 'none'}}></img>
                                <p style={{ margin: '11px' }}>r/{item.name}</p>
                            </li>
                        </Link>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SideBarDropdown;
