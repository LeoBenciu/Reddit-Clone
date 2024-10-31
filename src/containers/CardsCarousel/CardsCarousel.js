import React, {useEffect, useRef, useState} from 'react'
import Card from '../../components/card/card'
import styles from './CardsCarousel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const CardsCarousel = () => {

    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);


    const newsItems = [
        {t1: 'In pula Me', t2: 'Da o dreq'},
        {t1: 'Iasdfsdfpula Me', t2: 'Dsdfasdfsasddsd'},
        {t1: 'sdflkja Me', t2: 'Da o dreq'},
        {t1: 'In sadflkasdlfkj', t2: 'asdfsdffds'},
        {t1: 'asdflksdjf Me', t2: 'Da o dreq'},
        {t1: 'laksnd;flknalkdnf;aksdflk', t2: 'asokdjf;lkqewjjl;k'}
    ]

    useEffect(()=>{
        const carousel = carouselRef.current;
        if(carousel){
            setMaxScrollPosition(carousel.scrollWidth -carousel.clientWidth);
            const handleScroll=()=>{
                setScrollPosition(carousel.scrollLeft);
            };
            carousel.addEventListener('scroll', handleScroll);

            return()=>{
                carousel.removeEventListener('scroll', handleScroll)
            };
        }
    },[])

    const handleScrollLeft = ()=>{
        carouselRef.current.scrollTo({left:0, behavior: 'smooth'});
    }

    const handleScrollRight = ()=>{
        carouselRef.current.scrollTo({left: maxScrollPosition, behavior: 'smooth'});
    }

  return (
    <div className={styles.CarouselContainer}>
        {scrollPosition > 0&&(<button style={{left: '0',
            }} 
            className={styles.scrollButtons}
            onClick={handleScrollLeft}><FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleLeft}/></button>)
        }

        <ul ref={carouselRef} className={styles.Carousel}>
        {newsItems.map((item, index)=>(
            <li key={index} className={styles.Card}>
                <Card title={item.t1} paragraph={item.t2}/>
            </li>
        ))}
        </ul>

        {scrollPosition < maxScrollPosition&&(
            <button style={{right: '0',
            }} 
            className={styles.scrollButtons}
            onClick={handleScrollRight}><FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleRight}/></button>
        )}

    </div>
  )
}

export default CardsCarousel;
