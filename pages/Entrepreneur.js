import React from 'react'
import Head from 'next/head'
import CategoryPageTemplate from '../components/CategoryPageTemplate/CategoryPageTemplate'
import styles from '../styles/Home.module.css'

const Entrepreneur = () => {
    const getDataURL = 'https://api.illusionquote.com:443/api/getQuotesByCategory';
    const backgroundImage = 'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/Entrepreneur.jpg';
    const category = 'Entrepreneur';

    return (
        <div className={styles.container}>
        <Head>
          <title>Illusionist</title>
          <meta name="description" content="Inspiring Quotes" />
          <meta name="keywords" content="motivational, quotes, enterpreneur quotes, enterpreneurship" />
          <link rel="icon" href="/illusion.png" />
        </Head>
        <CategoryPageTemplate backgroundImage={backgroundImage} getDataURL={getDataURL} category={category}/>

        <footer className={styles.footer}>
            Powered by istiak
        </footer>
      </div>
    )
}

export default Entrepreneur
