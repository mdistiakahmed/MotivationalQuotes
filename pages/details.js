import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import Main from "../components/Main/Main"
import { useRouter } from 'next/router'
import  { useState,useEffect } from 'react'
import axios from 'axios'

const Details = () => {
    const [quoteList, setQuoteList] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('images/sea.jpg');
    const colorPalette = {
        bgColor1: 'rgba(11, 171, 100, 0.2)',
        bgColor2: 'rgba(59, 183, 143, 0.2)'
    }
    const router = useRouter()
    const { category } = router.query || 'Success'
    let getDataURL = 'https://api.illusionquote.com:443/api/getQuotesByCategory?category='+category ;

    useEffect(() => {
        console.log('use effect in detail page');
        axios.get(getDataURL)
        .then(res => {
            setQuoteList(res.data);
            console.log(quoteList)
        })
       
      },[getDataURL]);

    return (
        <div>
            <Topbar setBackgroundImage={setBackgroundImage}/>
            <Main colorPalette={colorPalette} backgroundImage={backgroundImage} quoteList={quoteList}/>
        </div>
    )
}

export default Details
