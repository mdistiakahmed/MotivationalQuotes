import Main from "./Main/Main"
import Topbar from "./Topbar/Topbar"
import { useRouter } from 'next/router'
import  { useState,useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {
    const [quoteList, setQuoteList] = useState([]);
    const backgroundImage = 'images/sea.jpg';
    const colorPalette = {
        bgColor1: 'rgba(11, 171, 100, 0.8)',
        bgColor2: 'rgba(59, 183, 143, 0.8)'
    }
    const getDataURL = 'https://motivationBackendLB-1513243918.us-east-2.elb.amazonaws.com:443/api/getAllQuotes';

    const router = useRouter()
    const { category } = router.query || 'Success'
    useEffect(() => {
        console.log('use effect in Home page');
        axios.get(getDataURL)
        .then(res => {
            setQuoteList(res.data);
            console.log(quoteList)
        })
       
      },[category]);

    return (
        <div>
            <Topbar />
            <Main colorPalette={colorPalette} backgroundImage={backgroundImage} quoteList={quoteList}/>
            
        </div>
    )
}

export default HomeScreen
