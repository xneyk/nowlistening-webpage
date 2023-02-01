import Image from 'next/image'
import ScreenToggler from './components/ScreenToggler'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <h2>Less filter,<br />more music.</h2>
        <br />
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          ¿Have you ever dreamed about a social network based on your musical tastes? NowListening is your place.<br /><br />A social network where you can only post if your are listening to music. Put your headphones and share what you're listening to now.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <ScreenToggler />
        <div>
          <h3 className={styles.rightText}>Publish photos while</h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className={styles.rightGrayText}>you're listening to music</h3>
        </div>
        <Image
          src={'/homeScreen.svg'}
          alt="Home Screen example"
          width="181"
          height="393" />
      </div>
    </main>
  )
}
