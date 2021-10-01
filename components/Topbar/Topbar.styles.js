import styled from '@emotion/styled';

export const Container = styled.div`  
    background-color: ${p => ( p.theme===1? 'rgba(206, 217, 106)' : (p.theme===2 ?'rgba(42, 38, 110)' : 'rgba(250, 85, 48)'))};
    display: grid;
    grid-template-columns: min-content min-content 0 minmax(100px,100%);
    column-gap: 10px;
    position: relative;
    transition: width .4s ease-in,height .4s ease-in,padding .4s ease-in;
    padding: .8em;
    justify-content: flex-start;
    align-items: center;
    transition-duration: 0.4s, 0.4s, 0.4s;
    transition-property: width, height, padding;
    transition-timing-function: ease-in, ease-in, ease-in;
`

export const Logo = styled.div`
    display: block;
    box-sizing: border-box;
    border-radius: 11px;
    :hover { 
        transform: scale(1.1);
    }
`

export const HomeURL = styled.a`
    font-size: calc(1em + .25vw);
    font-weight: 700;
    font-family: cursive;
    color: #fff;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    background-color: rgb(136, 53, 53,0.3);
    padding: 8px;
    border-radius: 11px;
    :hover { 
        background-color: rgb(20 ,44 ,44, .5);
    }
`
 

export const ManuNav = styled.nav`
    min-width: 0;
    color: #fff;
    font-size: 1.05em;
`

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    padding: .4em 0;
    margin: 0;
    flex-wrap: nowrap;
    width: 100%;
    flex-shrink: 1;
    min-width: 0;
    justify-content: flex-start;
    align-items: center;
`

export const Li = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
`

export const LiButton = styled.button`
    padding: .4em .5rem .4em 1rem;
    border: 1px solid rgba(0,0,0,.05);
    color: inherit;
    background-color: rgba(0,0,0,.2);
    border-radius: 11px;
    box-shadow: 0 13px 7px -15px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);

    align-items: center;
    justify-content: space-around;
    font-size: 18.9px;
    font-weight: 700;
    cursor: pointer;
    :hover { 
        transform: scale(1.1);
    }
    
`

export const LiA = styled.a`
    padding: .35em .9rem;
    background: 0 0;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
    text-decoration: none;
    white-space: nowrap;
    transition: color .1s ease-out;
    border-radius: 11px;
    :hover { 
        background-color: rgb(20 ,44 ,44, .1);
    }
    
`

export const Li1 = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
    display: none;
    transition: ease all .5s;
    cursor: pointer;

    @media (min-width: 42.9375em){
        display: flex;
    }
`

export const Li2 = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
    display: none;
    transition: ease all .5s;
    @media (min-width: 52.5em){
        display: flex;
    }
`

export const Li3 = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
    display: none;
    transition: ease all .5s;
    @media (min-width: 56.5625em){
        display: flex;
    }
`

export const Li4 = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
    display: none;
    transition-duration: 0.4s;
    @media (min-width: 70em){
        display: flex;
    }
`

export const Li5 = styled.li`
    position: relative;
    font-size: 18.9px;
    font-weight: 700;
    display: none;
    transition-duration: 0.4s;
    @media (min-width: 77.8125em){
        display: flex;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: cursive;
    
`
export const Button = styled.button`
    margin: 3px;
    border-radius: 50%;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-family: cursive;
    background-color: rgba(0,0,0,.2);
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);

    :active{
        background:olive;
    }
    
    :focus{
        background:olive;
    }
    
`

export const ManuNav2 = styled.nav`
    min-width: 0;
    color: #fff;
    font-size: 1.05em;
    ${p => p.moreButtonExpanded? 'display: none;': null};
    
`

export const Ul2 = styled.ul`
    list-style: none;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
`