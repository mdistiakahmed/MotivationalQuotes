import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeScreen from '../components/HomeScreen'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Motivation</title>
          <meta name="description" content="Inspiring Quotes" />
          <meta name="keywords" content="motivational, quotes, motivational quotes, inspiring quotes" />
          <link rel="icon" href="/illusion.png" />
        </Head>
        <HomeScreen />

        <footer className={styles.footer}>
            Powered by istiak
        </footer>
      </div>

  )
}
