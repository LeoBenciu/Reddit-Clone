import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styles from './searchBar.module.css'


function SearchBar() {
  return (
        <div className={styles.searchDiv}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'var(--text_two)'}}/>
          <form style={{width: '100%', height: '90%'}}>
          <input type="search" placeholder='Search Reddit' className={styles.searchInput}></input>
          </form>
        </div>
  )
}

export default SearchBar
