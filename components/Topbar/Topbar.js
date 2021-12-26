import * as s from './Topbar.styles';
import Link from 'next/link';
import  { useState,useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "362685012589-6rrm3j4jcmt5dbec7tvhtptijvcp2k7a.apps.googleusercontent.com";

const Topbar = () => {
    const [theme, setTheme] = useState(3);
    const [moreButtonExpanded, setMoreButtonExpanded] = useState(true);

    // Goolge login/logout option
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

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

            <div>
                { showloginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

                { showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
            </div>
        </s.Container>
    )
}

export default Topbar
