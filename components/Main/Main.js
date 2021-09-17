import Header from '../Header/Header';
import * as s from './Main.styles';

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
                            <s.Image  src={'data:image/;base64,' + item.authorImage.data} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                        </s.ImageWrapper>
                        <s.Author>{item.authorName}</s.Author>
                    </s.ImageContainer>
                    <s.Quote>{item.quote} </s.Quote>
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
