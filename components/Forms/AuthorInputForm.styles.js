import styled from '@emotion/styled'

export const Container = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    ${p => !p.addFormDisplayed && `display: none;`}
`

export const Form = styled.form`  
    display: flex;
    flex-direction: column;
    width: 400px;
    min-width: 100px;
    min-height: 400px;
    padding: 20px 40px 40px 40px;
    border-radius: 6px;
    box-shadow: 0px 8px 36px #222;
    background-color: #fefefe;
`

export const Input = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    border-radius: 5px;
  `
  export const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
`

export const Button = styled.button`  
    margin-top: 10px;
    background-color: green;
    border: 1px solid rgba(0,0,0,.05);
    box-shadow: 0 13px 7px -15px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    font-size: 18.9px;
    font-weight: 700;
    cursor: pointer;
`
export const ImagePreview = styled.div`  
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
`

export const WholeContainer = styled.div`  
    display: flex;
    flex-direction: column;
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

export const PaginationDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`