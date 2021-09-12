import * as s from './Topbar.styles';
import Link from 'next/link';

const Topbar = () => {
    return (
        <s.Container>
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
                <s.Button>light</s.Button>
                <s.Button>Dark</s.Button>
                <s.Button>Joy</s.Button>
            </s.ButtonContainer>
        </s.Container>
    )
}

export default Topbar
