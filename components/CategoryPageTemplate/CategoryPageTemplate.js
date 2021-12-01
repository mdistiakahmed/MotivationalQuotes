import  { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import * as s from './CategoryPageTemplate.styles'
import Topbar from '../Topbar/Topbar'
import Main from '../Main/Main'

const CategoryPageTemplate = (props) => {
    const {
        backgroundImage = '',
        getDataURL='',
        category=''
    } = props;

    const [quoteList, setQuoteList] = useState([]);

    // ------pagination variables ------
    const pageLimit = 1;
    const [pageOffset, setPageOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    const router = useRouter()
    const { xx } = router.query || 'Success'

    const seeAllQuotes = (currentOffset) => {
        setPageOffset(currentOffset);
        axios.get(getDataURL ,{
            params: {
              category: category,
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
      },[xx]);

    return (
        <div>
            <Topbar />
            <Main  backgroundImage={backgroundImage} quoteList={quoteList}/>
            <s.PaginationDiv>
               {hasPrevious && <s.PreviousButton onClick={seePreviousQuotes}>Previous</s.PreviousButton> }
               {hasNext && <s.NextButton onClick={seeNextQuotes}>Next</s.NextButton> }
            </s.PaginationDiv>
        </div>
    )
}

export default CategoryPageTemplate
