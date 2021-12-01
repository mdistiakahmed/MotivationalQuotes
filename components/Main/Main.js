import Header from '../Header/Header';
import * as s from './Main.styles';
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
  } from 'react-share';

/*
Provide background image and a list of quotes, 
This main component will display all the quotes

*/

const Main = (props) => {
    const {
        backgroundImage = '',
        quoteList=[]
    } = props;


    const allQuotes = quoteList.map((item,index) =>{
        return (
                <s.Card key={index}>
                    <s.ImageContainer>
                        <s.ImageWrapper> 
                            <s.Image  src={'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/' + item.imageFileName} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                        </s.ImageWrapper>
                        <s.Author>{item.authorName}</s.Author>
                    </s.ImageContainer>
                    <s.Quote>{item.quote} </s.Quote>
                    <s.LikeShareSection>
                        <FacebookShareButton
                            url={'https://illusionquote.com/'}
                            quote={'"'+item.quote +'"' + '\n\n' + item.authorName}
                        >
                            <FacebookIcon size={20} round={true} />
                        </FacebookShareButton>
                    </s.LikeShareSection>
               </s.Card>)
    })



    return (
        <s.MainContainer backgroundImage={backgroundImage}>
            <Header />
            <s.Container> 
                <s.Row>{allQuotes}</s.Row>
            </s.Container>
        </s.MainContainer>
    )
}

export default Main
