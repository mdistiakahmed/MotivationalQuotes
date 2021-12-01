import Main from "./Main/Main"
import Topbar from "./Topbar/Topbar"
import { useRouter } from 'next/router'
import  { useState,useEffect } from 'react'
import axios from 'axios'
import * as s from './HomeScreen.styles';


const HomeScreen = () => {
    const [quoteList, setQuoteList] = useState([]);
    const backgroundImage = 'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/Suicide.jpg';
    const getDataURL = 'https://api.illusionquote.com:443/api/getAllQuotes';

    // ------pagination variables ------
    const pageLimit = 10;
    const [pageOffset, setPageOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    const router = useRouter()
    const { category } = router.query || 'Success'

    const seeAllQuotes = (currentOffset) => {
        setPageOffset(currentOffset);
        axios.get('https://api.illusionquote.com:443/api/getAllQuotes' ,{
            params: {
              offset: currentOffset,
              limit: pageLimit
             }
          })
        .then(res => {
            setQuoteList(res.data.quoteList);
            setHasNext(res.data.hasNext);
            setHasPrevious(res.data.hasPrevious);
        })
    }

    const seeNextQuotes = () => {
        seeAllQuotes(pageOffset + pageLimit);
    }

    const seePreviousQuotes = () => {
        seeAllQuotes(pageOffset - pageLimit); 
    }

    // This is to auto trigger method to load initial data
    useEffect(() => {
        console.log('use effect in Home page');
        seeAllQuotes(0);    
      },[category]);

    

    return (
        <div>
            <Topbar />
            <Main backgroundImage={backgroundImage} quoteList={quoteList} />
            <s.PaginationDiv>
               {hasPrevious && <s.PreviousButton onClick={seePreviousQuotes}>Previous</s.PreviousButton> }
               {hasNext && <s.NextButton onClick={seeNextQuotes}>Next</s.NextButton> }
            </s.PaginationDiv>
            
        </div>
    )
}

export default HomeScreen
