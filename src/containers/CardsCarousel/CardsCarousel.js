import React from 'react'
import Card from '../../components/card/card'
import styles from './CardsCarousel.module.css'

const CardsCarousel = () => {

    const newsItems = [
        {t1: 'In pula Me', t2: 'Da o dreq'},
        {t1: 'Iasdfsdfpula Me', t2: 'Dsdfasdfsasddsd'},
        {t1: 'sdflkja Me', t2: 'Da o dreq'},
        {t1: 'In sadflkasdlfkj', t2: 'asdfsdffds'},
        {t1: 'asdflksdjf Me', t2: 'Da o dreq'},
        {t1: 'laksnd;flknalkdnf;aksdflk', t2: 'asokdjf;lkqewjjl;k'}
    ]

  return (
    <div className={styles.CarouselContainer}>
        <ul className={styles.Carousel}>
        {newsItems.map((item, index)=>(
            <li key={index} className={styles.Card}>
                <Card title={item.t1} paragraph={item.t2}/>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default CardsCarousel;
