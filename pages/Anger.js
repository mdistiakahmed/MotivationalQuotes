import React from 'react'
import Head from 'next/head'
import CategoryPageTemplate from '../components/CategoryPageTemplate/CategoryPageTemplate'
import styles from '../styles/Home.module.css'

const Anger = () => {
    const getDataURL = 'https://api.illusionquote.com:443/api/getQuotesByCategory';
    const backgroundImage = 'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/Anger.jpg';
    const category = 'Anger';

    return (
        <div className={styles.container}>
        <Head>
          <title>Illusionist</title>
          <meta name="description" content="Inspiring Quotes" />
          <meta name="keywords" content="motivational, quotes, anger quotes, anger control quote" />
          <link rel="icon" href="/illusion.png" />
        </Head>
        <CategoryPageTemplate backgroundImage={backgroundImage} getDataURL={getDataURL} category={category}/>

        <footer className={styles.footer}>
            Powered by istiak
        </footer>
      </div>
    )
}

export default Anger
