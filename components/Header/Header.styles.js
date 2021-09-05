import styled from '@emotion/styled'

export const Container = styled.div`
    background-color: rgba(255, 255, 255,0.3);
    padding: .25em 0;
    margin-bottom: .35em;
`

export const NavBar = styled.nav`
    font-size: 1.125em;

`

export const Ul = styled.ul`
    display: flex;
    padding: .25em 0;
    margin-top: .25em;
    margin-bottom: .35em;
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;

    ::-webkit-scrollbar {
        display: none;
    }
    
`

export const LiItem = styled.li`
    list-style: none;
    font-size: 18.1338px;
    padding-left: 14px;
    margin-right: 9px;
    transition: all .2s ease-in-out; 
    :hover { 
        transform: scale(1.1); 
    }
`

export const ItemRef = styled.a`
    color: #d33a2c!important;
    font-weight: 500;
    align-items: center;
    background-color: rgb(255, 231, 231);
    padding: 2px 12px;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
    border-top-left-radius: 11px;
    

`
