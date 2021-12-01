import styled from '@emotion/styled'

export const PaginationDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const AuthorDeleteButton = styled.button`
    padding: .4em .5rem .4em 1rem;
    margin-top: 10px;
    border: 1px solid rgba(0,0,0,.05);
    color: inherit;
    background-color: rgba(0,0,0,.2);
    border-radius: 11px;
    box-shadow: 0 13px 7px -15px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);

    max-width: 200px;
    align-items: center;
    justify-content: space-around;
    font-size: 18.9px;
    font-weight: 700;
    cursor: pointer;
    :hover { 
        transform: scale(1.1);
    }
    
`