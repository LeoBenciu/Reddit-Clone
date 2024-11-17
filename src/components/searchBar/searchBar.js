import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faMagnifyingGlass, faX} from '@fortawesome/free-solid-svg-icons';
import styles from './searchBar.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/slices/SearchSlice2';
import { addSearch, removeSearch } from '../../redux/slices/RecentSearchSlice';

function SearchBar() {

  const [isSearchClicked,setIsSearchClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query,setQuery] = useState('');

  const handleSubmitBtn=()=>{
    navigate(`search/${query}`);
    dispatch(addSearch(query));
    handleOverlayClick();
  };

  const handleDeleteSearch=(name,event)=>{
    event.preventDefault();
    event.stopPropagation();
    dispatch(removeSearch(name))
  };

  const handleSearchBarClick = ()=>{
    setIsSearchClicked(true);
  }

  const handleOverlayClick = () =>{
    setIsSearchClicked(false);
  }

  const recents = useSelector(state=> state.recentSearch.recentSearch);
  console.log(recents);
  return (
        <div className={styles.search}>
          <div className={styles.searchDiv} style={{backgroundColor: isSearchClicked?'var(--background_four)':'var(--background_three)'}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'var(--text_two)'}}/>
            <form style={{width: '100%', height: '90%'}} onSubmit={handleSubmitBtn}>
            <input type="search" placeholder='Search Reddit' onClick={handleSearchBarClick} className={styles.searchInput} onChange={(e)=>setQuery(e.target.value)}></input>
            </form>
          </div>

          {isSearchClicked&&(
            <div className={styles.recentContainer}>
              {recents.length > 0&&(<h2 style={{color: 'var(--text_two)', fontWeight: '600', padding: '0 1.3rem', margin: '10px 0 5px 0'}}>Recent</h2>)}
              <ul style={{listStyle: 'none'}}>
                {recents.map((recent,index)=>{
                    
                    const handleRecentBtn =(recent)=>{
                      navigate(`search/${recent}`);
                      dispatch(addSearch(recent));
                      handleOverlayClick();
                    }

                    const handleClick= ()=>{
                      handleRecentBtn(recent);
                    }

                  return(
                  <li key={index}>
                    <div className={styles.recentButton} onClick={handleClick} style={{borderRadius: index>recents.length-2? '0 0 15px 15px': '0'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', gap: '15px', color: 'var(--text_one)'}}>
                        <FontAwesomeIcon icon={faClock} style={{width: '20px', height:'20px', color: 'var(--text_one)'}}/>
                        <p>{recent}</p>
                      </div>
                      <button className={styles.deleteButton} onClick={(e)=>handleDeleteSearch(recent, e)}>
                        <FontAwesomeIcon icon={faX} className={styles.cross}/>
                      </button>
                    </div>
                  </li>
            )})}
              </ul>
          </div>)}

          {isSearchClicked&&(<div className={styles.overlay}
          onClick={handleOverlayClick}>
          </div>)}

          </div>
  )
}

export default SearchBar
