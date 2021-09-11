import Header from '../Header/Header';
import * as s from './Main.styles';

const Main = (props) => {
    const {
        colorPalette = {
            bgColor1: 'rgba(11, 171, 100, 0.8)',
            bgColor2: 'rgba(59, 183, 143, 0.8)'
        },
        backgroundImage = '',
        quotes=[]
    } = props;
    const allQuotes = quotes.map((item,index) =>{
        return (
            <s.Card key={index} >
                <s.ImageContainer>
                    <s.ImageWrapper> 
                        <s.Image  src={item.image} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                    </s.ImageWrapper>
                    <s.Author>{item.author}</s.Author>
                </s.ImageContainer>
                {item.data}
                <p><s.ExploreMore href="https://www.w3schools.com/"  target="_blank">Explore More of {item.author}</s.ExploreMore></p>
            </s.Card>
        )
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
