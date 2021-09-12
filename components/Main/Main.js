import Header from '../Header/Header';
import * as s from './Main.styles';
import  { useState,useEffect } from 'react';
import axios from 'axios';
import {Quotes} from '../../Data/Quotes'

const Main = (props) => {
    const {
        colorPalette = {
            bgColor1: 'rgba(11, 171, 100)',
            bgColor2: 'rgba(59, 183, 143)'
        },
        backgroundImage = '',
        quoteList=[]
    } = props;
    //const [quoteList, setQuoteList] = useState([]);

    const seeAllQuotes = () => {
        axios.get(url)
        .then(res => {
            setQuoteList(res.data);
        })
    }


    useEffect(() => {
        //seeAllQuotes();
      }, []);

    const allQuotes = quoteList.map((item,index) =>{
        return (
                <s.Card key={index}>
                    <s.ImageContainer>
                        <s.ImageWrapper> 
                            <s.Image  src={'data:image/;base64,' + item.authorImage.data} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                        </s.ImageWrapper>
                        <s.Author>{item.authorName}</s.Author>
                    </s.ImageContainer>
                    <s.Quote>{item.quote} </s.Quote>
               </s.Card>)
    })



    return (
        <s.MainContainer colorPalette={colorPalette} backgroundImage={backgroundImage}>
            <Header />
            <s.Container> 
                <s.Row>{allQuotes}</s.Row>
            </s.Container>
        </s.MainContainer>
    )
}

export default Main
