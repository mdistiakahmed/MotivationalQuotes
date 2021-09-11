import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import {b} from '../Data/b'
import Main from "../components/Main/Main"

const details = () => {
    const backgroundImage = 'images/mountain.jpg';
    const colorPalette = {
        bgColor1: 'rgba(11, 171, 100, 0.2)',
        bgColor2: 'rgba(59, 183, 143, 0.2)'
    }

    return (
        <div>
            <Topbar />
            <Main colorPalette={colorPalette} backgroundImage={backgroundImage} quotes={b}/>
        </div>
    )
}

export default details
