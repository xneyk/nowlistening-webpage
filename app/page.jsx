'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ScreenToggler from './components/ScreenToggler'
import styles from './page.module.css'
import StoreButton from './components/StoreButton'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

export default function Home() {

  const data = [
    {
       firstTitle: 'Post some pics while',
       secondTitle: `you're listening to music`,
       src: '/homeScreen.svg',
       alt: 'Home Screen Example'
    },
    {
       firstTitle: 'Give your opinion',
       secondTitle: 'about music industry',
       src: '/opinionScreen.svg',
       alt: 'Opinions Screen Example'
    },
    {
       firstTitle: 'Let your friends',
       secondTitle: `see what you're NowListening!`,
       src: '/meetScreen.svg',
       alt: 'Meet Your Friends Example'
    }
 ];

  const [dataIndex, setDataIndex] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <div className={styles.leftText}>
          <h2>Less filter,<br />more music.</h2>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            ¿Have you ever dreamed about a social network based on your musical tastes? NowListening is your place.<br /><br />A social network where you can only post if you are listening to music. Put on your headphones and share what you're listening to now.
          </p>
        </div>
        <div className={styles.storeButtonContaier}>
          <StoreButton 
            icon={<FaApple size={40} />}
            upText={'Download on the'}
            downText={'Apple Store'}
          />
          <StoreButton 
            icon={<FaGooglePlay size={40} />}
            upText={'Get it on'}
            downText={'Google Play'}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <h3 className={styles.rightText}>{data[dataIndex].firstTitle}</h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className={styles.rightGrayText}>{data[dataIndex].secondTitle}</h3>
        </div>
        <ScreenToggler 
          setDataIndex={setDataIndex}/>
        <Image
          src={data[dataIndex].src}
          alt={data[dataIndex].alt}
          width="393" //SVG doesn't take this value. 
          height="393" //This one is the important value.
          />
      </div>
    </main>
  )
}
