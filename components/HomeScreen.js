import Main from "./Main/Main"
import Topbar from "./Topbar/Topbar"
import {Quotes} from '../Data/Quotes'


const HomeScreen = () => {
    const backgroundImage = 'images/tree.jpg';
    const colorPalette = {
        bgColor1: 'rgba(11, 171, 100, 0.8)',
        bgColor2: 'rgba(59, 183, 143, 0.8)'
    }

    return (
        <div>
            <Topbar />
            <Main colorPalette={colorPalette} backgroundImage={backgroundImage} quotes={Quotes}/>
            
        </div>
    )
}

export default HomeScreen
