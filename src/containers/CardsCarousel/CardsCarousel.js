import React, {useEffect, useRef, useState} from 'react'
import Card from '../../components/card/card'
import styles from './CardsCarousel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularCarousel } from '../../redux/slices/PopularSlice'

const CardsCarousel = () => {

    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);
    const {posts, error, status} = useSelector((state)=>state.popular);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchPopularCarousel());
            console.log(posts);
        };
    },[dispatch,status]);


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
    },[posts])

    const handleScrollLeft = ()=>{
        carouselRef.current.scrollTo({left:0, behavior: 'smooth'});
    }

    const handleScrollRight = ()=>{
        carouselRef.current.scrollTo({left: maxScrollPosition, behavior: 'smooth'});
    }

    if(status === 'loading'){
        return <p>Loading...</p>
    }
    if(status === 'failed'){
        return <p>Error: {error}</p>
    }


  return (
    <div className={styles.CarouselContainer}>
        {scrollPosition > 0&&(<button style={{left: '0',
            }} 
            className={styles.scrollButtons}
            onClick={handleScrollLeft}><FontAwesomeIcon style={{width: '21px', height: '21px'}} icon={faAngleLeft}/></button>)
        }

        <ul ref={carouselRef} className={styles.Carousel}>
        {posts.map((post, index)=>{

                const imageUrl = post.preview?.images?.[0]?.resolutions?.[2]?.url?.replace(
                    /&amp;/g,
                    '&'
                ) || 'path/to/default-image.jpg';

            
        return(<li key={index} className={styles.Card}>
                <Card title={post.title} picture={imageUrl} paragraph='{}'/>
                </li>)
        })}
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
