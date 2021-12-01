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
    cursor: pointer;
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
    position: relative;
    display: block;
    min-width: 0;
    color: #fff;
    grid-column: span 2;
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
`

export const Li = styled.li`
    list-style: none;
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
    box-sizing: border-box;
    display: block;
    position: relative;
    grid-row-start: 2;
    grid-column: 1/5;
    font-size: 18px;
    ${p => p.moreButtonExpanded? 'display: none;': 'display: flex;'};
    
`

export const Ul2 = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 18px;
    color: #fff;
`
