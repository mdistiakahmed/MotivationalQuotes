import * as s from './Topbar.styles';
import Link from 'next/link';
import  { useState,useEffect } from 'react'

const Topbar = ({setBackgroundImage}) => {
    const [theme, setTheme] = useState(3);

    const lightTheme = () => {
        setTheme(1);
        setBackgroundImage('images/mountain.jpg');
    }

    const darkTheme = () => {
        setTheme(2);
        setBackgroundImage('images/tree.jpg');
    }

    const joyTheme = () => {
        setTheme(3);
        setBackgroundImage('images/sea.jpg');
    }

    return (
        <s.Container theme={theme}>
            <s.Logo>
                <Link href="/">
                    <s.HomeURL>Home</s.HomeURL>
                </Link>
            </s.Logo>
            <s.ManuNav>
                <s.Ul> 
                    <s.Li1>
                        <Link href="/">
                            <s.LiA>Story</s.LiA>
                        </Link>
                     </s.Li1>
                    <s.Li2>
                        <Link href="/">
                            <s.LiA>Events</s.LiA>
                        </Link>
                    </s.Li2>
                    <s.Li3>
                        <Link href="/">
                            <s.LiA>Movie Quotes</s.LiA>
                        </Link>
                    </s.Li3>
                    <s.Li4>
                        <Link href="/">
                            <s.LiA>Religious Quote</s.LiA>
                        </Link>
                    </s.Li4>
                    <s.Li5>
                        <Link href="/">
                            <s.LiA>Songs</s.LiA>
                        </Link>
                    </s.Li5>
                    <s.Li><s.LiButton>
                        <span> Menu </span>
                    </s.LiButton></s.Li>

                </s.Ul>
            </s.ManuNav>
            <div> </div>
            <s.ButtonContainer>
                <p>Select Theme </p>
                <s.Button onClick={lightTheme}>light</s.Button>
                <s.Button onClick={darkTheme}>Dark</s.Button>
                <s.Button onClick={joyTheme}>Joy</s.Button>
            </s.ButtonContainer>
        </s.Container>
    )
}

export default Topbar
