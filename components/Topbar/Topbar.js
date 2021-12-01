import * as s from './Topbar.styles';
import Link from 'next/link';
import  { useState,useEffect } from 'react'

const Topbar = () => {
    const [theme, setTheme] = useState(3);
    const [moreButtonExpanded, setMoreButtonExpanded] = useState(true);

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
