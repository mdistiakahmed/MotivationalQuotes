import  { useState,useEffect } from 'react'
import TemplateBody from '../components/BodyTemplate/TemplateBody'
import Topbar from '../components/Topbar/Topbar'
import {Test} from '../Data/Test';
import {TestQuote} from '../Data/TestQuote';

/*
Create a new Page very easily by following this template page 

you need to provide background image, header category and a list of quotes
Thats it.

*/

const Tmp = () => {
    const [backgroundImage, setBackgroundImage] = useState('images/sea.jpg');
    return (
        <div>
            <Topbar setBackgroundImage={setBackgroundImage}/>
            <TemplateBody backgroundImage={backgroundImage} headerItems={Test} quoteList={TestQuote}/>
        </div>
    )
}

export default Tmp
