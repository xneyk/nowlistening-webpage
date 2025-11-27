'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ScreenToggler from './components/ScreenToggler'
import styles from './page.module.css'
import StoreButton from './components/StoreButton'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import Header from './components/Header'
import InfoCard from './components/InfoCard'
import InfoBlock from './components/InfoBlock'
import BigInput from './components/BigInput'

export default function Home() {
  const basePath = 'nowlistening-webpage/'; // used for GitHub Pages Production Version
  const data = [
    {
       firstTitle: 'Post some pics while',
       secondTitle: `you're listening to music`,
       src: `/${basePath}homeScreen.svg`,
       alt: 'Home Screen Example'
    },
    {
       firstTitle: 'Give your opinion',
       secondTitle: 'about music industry',
       src: `/${basePath}opinionScreen.svg`,
       alt: 'Opinions Screen Example'
    },
    {
       firstTitle: 'Let your friends',
       secondTitle: `see what you're NowListening!`,
       src: `/${basePath}meetScreen.svg`,
       alt: 'Meet Your Friends Example'
    }
 ];

  const [dataIndex, setDataIndex] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.briefContainer}>
        <Header />
        <div className={styles.briefLeftRightDivider}>
          <div className={styles.leftContainer}>
            <div className={styles.leftText}>
              <h2>Less filter,<br />more music.</h2>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                ¿Have you ever dreamed about a social network based on your musical tastes? NowListening is your place.<br /><br />A social network where you can only post if you are listening to music. Put on your headphones and share what you're listening to now.
              </p>
            </div>
            <div className={styles.storeButtonContainer}>
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
              <h4 className={styles.rightText}>{data[dataIndex].firstTitle}</h4>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h4 className={styles.rightGrayText}>{data[dataIndex].secondTitle}</h4>
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
        </div>
      </div>
      <div className={`${styles.opinionsContainer} ${styles.principalContainers}`}>
        <h3 className={`${styles.rightAlignedText} ${styles.sectionTitle}`}>
          Are you doubting?<br/>Listen to our community
        </h3>
        <div className={styles.opinionsDivider}>
          <div className={styles.opinionColumn}>
            <InfoCard
              title = "No filters, no noise, just music."
              text = "Finally, a social network that’s actually about something. No filters, no noise, just music and real moments."
            />
            <InfoCard
              title = "I’ve discovered more new music in a month than ever before."
              text = "Since I started using NowListening, I’ve discovered more new music in a month than I used to in a whole year. It feels like having a personal music-curated feed."
            />
            <InfoCard
              title = "Sharing music here feels so natural and fun."
              text = "NowListening makes sharing music feel natural. I hit play, post it, and suddenly I’m talking to someone who loves the same track. It’s simple, but addictive."
            />
          </div>
          <div className={styles.opinionColumn}>
            <InfoCard
              title = "I keep meeting people who love the same music as me!"
              text = "I love how easy it is to connect with people who share my exact music taste. I’ve already made a bunch of new friends just by posting what I’m listening to."
            />
            <InfoCard
              title = "Every day I find a new song I can’t stop listening to."
              text = "Every time I open the app, I find a new artist or song I end up obsessed with. It’s become my go-to place for music discovery."
            />
            <InfoCard
              title = "Finally, a community that speaks the same language: music."
              text = "As a music fan, this app is a dream. It’s like joining a community where everyone speaks the same language: music."
            />
          </div>
        </div>
      </div>
      <div className={`${styles.advertisingSection} ${styles.principalContainers}`}>
        <h3 className={`${styles.centerAlignedText} ${styles.sectionTitle}`}>
          Thinking about advertising<br/>yourself?
        </h3>
        <p className={styles.centerAlignedText}>
          On NowListening, your promotion appears at the perfect moment: when users are living the music.
        </p>
        <div className={styles.advertisingScenariosContainer}>
          <InfoBlock
            title = "Are you an artist?"
            text = "Promote your new releases right where people discover new music."
          />
          <InfoBlock
            title = "Are you a brand?"
            text = "Reach users who care about headphones, speakers, instruments, apps, and everything that elevates the music experience."
            rightAligned = {true}
          />
          <InfoBlock
            title = "Hosting a music event?"
            text = "Showcase your festivals, concerts, or live sessions to users who are already ready to discover their next on-stage experience."
          />
        </div>
      </div>
      <div className={`${styles.contactContainer} ${styles.principalContainers}`}>
        <h3 className={`${styles.centerAlignedText} ${styles.sectionTitle}`}>
          Convinced you?<br/>Let us your email and we’ll contact you!
        </h3>
        <h4 className={`${styles.centerAlignedText} ${styles.sectionTitle}`}>
          Let’s meet! What’s your email?
        </h4>
        <BigInput
          id = 'email_input'
          type = 'email'
          placeholder = 'Write your email'
        />
      </div>
    </main>
  )
}
