import * as s from './Topbar.styles';
import Link from 'next/link';
import  { useState,useEffect } from 'react'

const Topbar = ({setBackgroundImage}) => {
    const [theme, setTheme] = useState(3);
    const [moreButtonExpanded, setMoreButtonExpanded] = useState(true);

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

    console.log(moreButtonExpanded)

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
                    
                    <s.Li>
                        <s.LiButton onClick={()=> setMoreButtonExpanded(!moreButtonExpanded)}>
                            <span> Menu </span>
                        </s.LiButton>
                    </s.Li>

                </s.Ul>
            </s.ManuNav>

            <s.ManuNav2 moreButtonExpanded={moreButtonExpanded}> 
                <s.Ul2> 
                    <li>
                        <Link href="/">
                            <s.LiA>Story</s.LiA>
                        </Link>
                     </li>
                    <li>
                        <Link href="/">
                            <s.LiA>Events</s.LiA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <s.LiA>Movie Quotes</s.LiA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <s.LiA>Religious Quote</s.LiA>
                        </Link>
                    </li>
                
                </s.Ul2>
            </s.ManuNav2>
        </s.Container>
    )
}

export default Topbar
