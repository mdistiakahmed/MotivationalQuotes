import styled from '@emotion/styled';

export const Container = styled.div`  
    background-color: rgb(211, 58, 44);
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
 


export const Search = styled.div`
    flex-basis: 100px;
    flex-shrink: 1;
`

export const SearchInputWrapper = styled.div`
    display: block;
    font-size: 18px;

`

export const Submit = styled.input`
    display: none !important; 

`

export const SearchInput = styled.input`
    padding-left: calc(22px + 15px + 15px);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNHB4IiB3aWR0aD0iMjRweCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyMi4zMSIgeTE9IjIzLjYyIiB4Mj0iMy43MyIgeTI9IjMuMDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlOTM3MjIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmODZmMjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+TWFnbmlmaWVyPC90aXRsZT48cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIGQ9Ik0yMy4zMyAyMC4xbC00LjczLTQuNzRhMTAuMDYgMTAuMDYgMCAxIDAtMy4yMyAzLjIzbDQuNzQgNC43NGEyLjI5IDIuMjkgMCAxIDAgMy4yMi0zLjIzem0tMTcuNDgtNS44NGE1Ljk0IDUuOTQgMCAxIDEgOC40MiAwIDYgNiAwIDAgMS04LjQyIDB6Ii8+PC9zdmc+);
    background-repeat: no-repeat;
    background-size: 22px auto;
    background-position: 15px 45%;
    font-size: calc(1em + .1vw);
    border-radius: 11px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 700;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    transition: all .2s ease-in-out;
    transition: ease all .5s;

    border: none;
    display: block;
    color: #333;
    background-color: #fff;

    width: 100%;
    outline: 0;

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
    background-image: linear-gradient(#aa1994,#aa1994);
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);

    :active{
        background:olive;
    }
    
    :focus{
        background:olive;
    }
    
`