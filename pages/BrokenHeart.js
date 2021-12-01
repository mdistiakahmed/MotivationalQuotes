import React from 'react'
import Head from 'next/head'
import CategoryPageTemplate from '../components/CategoryPageTemplate/CategoryPageTemplate'
import styles from '../styles/Home.module.css'

const BrokenHeart = () => {
    const getDataURL = 'https://api.illusionquote.com:443/api/getQuotesByCategory';
    const backgroundImage = 'images/sea.jpg';
    const category = 'BrokenHeart';

    return (
        <div className={styles.container}>
        <Head>
          <title>Motivation</title>
          <meta name="description" content="Inspiring Quotes" />
          <meta name="keywords" content="motivational, quotes, motivational quotes, inspiring quotes" />
          <link rel="icon" href="/illusion.png" />
        </Head>
        <CategoryPageTemplate backgroundImage={backgroundImage} getDataURL={getDataURL} category={category}/>

        <footer className={styles.footer}>
            Powered by istiak
        </footer>
      </div>
    )
}

export default BrokenHeart
