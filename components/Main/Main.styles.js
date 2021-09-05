import styled from '@emotion/styled'

export const MainContainer = styled.div`
    flex-grow: 1;
    background-image: linear-gradient(
        315deg,
        rgba(35, 51, 41, 0.8) 0%,
        rgba(99, 212, 113, 0.8) 74%),
        url('images/tree.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

`

export const Container = styled.div`
    width: calc(100% - .5em);
    max-width: 1440px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    width: 85vw;
`

export const Row = styled.div`
    display: grid;
    grid-gap: 0 1.5em;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    padding: 0 .5em;
    opacity: 0.8;
`

export const Card = styled.div`
    background-color: rgb(251, 236, 249);
    border-radius: 11px;
    padding: 2rem 2rem;
    margin: 1.5em 0;
    display: block;
    padding: calc(2rem + .5vw);
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    transition: box-shadow .2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const Author = styled.p`
    text-decoration: none;
    transition: color .1s ease-out;
    text-decoration-line: underline;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 1px;
    text-underline-offset: 1px;
    color: #aa1994;
    font-size: calc(18px + 1.1vw);
    font-weight: bold;
    font-family: cursive;
    margin-top: 0px;
`

export const ExploreMore = styled.a`
    text-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
    background: #aa1994;
    background-image: linear-gradient(#aa1994,#aa1994);
    font-size: calc(1em + .25vw);
    padding: .75em 1em;
    display: inline-block;
    border-radius: 11px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: none;
    font-weight: 700;
    margin-top: 32px;
    transition: all .2s ease-in-out; 
    :hover { 
        transform: scale(1.05); 
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

`

export const ImageWrapper = styled.div`
    width: 176px;
    height: 176px;
    border-radius: inherit;
    transform: scale(.84) translateX(15%) rotateZ(calc(-1 * (11 * 1deg)));
    transform-origin: 0 100%;
    transition: transform .2s ease-out;
    overflow: hidden;
    border-bottom-color rgb(211, 58, 44);
    border-bottom-left-radius: 21.6px;
    border-bottom-right-radius: 21.6px;
    border-bottom-style: solid;
    border-bottom-width: 8px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(211, 58, 44);
    border-left-style: solid;
    border-left-width: 8px;
    border-right-color: rgb(211, 58, 44);
    border-right-style: solid;
    border-right-width: 8px;
    border-top-color: rgb(211, 58, 44);
    border-top-left-radius: 21.6px;
    border-top-right-radius: 21.6px;
    border-top-style: solid;
    border-top-width: 8px;
    
    :hover { 
        transform: scale(.84) rotateZ(calc(11 * 0deg));
    }

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.2) rotateZ(calc(11 * 1deg));
    transition: transform .2s ease-out;
    :hover { 
        transform: scale(1.2) rotateZ(calc(11 * 0deg));
    }

`