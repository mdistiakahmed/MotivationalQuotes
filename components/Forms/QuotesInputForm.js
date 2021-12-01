import * as s from './QuotesInputForm.styles';
import Select from 'react-select';
import  { useState,useEffect } from 'react';
import axios from 'axios';
import {HeaderCategory} from '../../Data/HeaderCategoryData';
import AdminTopBar from './AdminTopBar';

const QuotesInputForm = () => {
    const [authorList, setAuthorList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quote, setQuote] = useState('');
    const [addFormDisplayed, setAddFormDisplayed] = useState(false);
    const [quoteList, setQuoteList] = useState([]);

    // ------pagination variables ------
    const pageLimit = 1;
    const [pageOffset, setPageOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    const loadAuthor = () => {
        setAuthorList([]);
        console.log('Use Effect is being called');

        axios.get('https://api.illusionquote.com:443/api/getAllAuthor' ,{
            params: {
              offset: 0,
              limit: 100
             }
          })
        .then(res => {
            res.data.authorList.map((item,index) =>{
                const newVal = { label: item.name,value: item.id};
                setAuthorList(prevArray => [...prevArray, newVal])
            });
        })

        HeaderCategory.map((item,index) =>{
            const newVal = { label: item.data,value: item.id};
            setCategoryList(prevArray => [...prevArray, newVal])
        });
    }

    const seeNextQuotes = () => {
        seeAllQuotes(pageOffset + pageLimit);
    }

    const seePreviousQuotes = () => {
        seeAllQuotes(pageOffset - pageLimit); 
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("quote", quote);
        formData.append("authorId", selectedAuthor);
        formData.append("category", selectedCategory);

        axios
        .post('https://api.illusionquote.com:443/api/addQuote', formData)
        .then((res) => {
            alert("Success");
        })
        .catch((err) => alert(" Error"));

        setQuote('');

    }

    const seeAllQuotes = (xx) => {
        setPageOffset(xx);
        axios.get('https://api.illusionquote.com:443/api/getAllQuotes' ,{
            params: {
              offset: xx,
              limit: pageLimit
             }
          })
        .then(res => {
            setQuoteList(res.data.quoteList);
            setHasNext(res.data.hasNext);
            setHasPrevious(res.data.hasPrevious);
        })
    }

    const showHideButtonHandle = () => {
        loadAuthor();
        setAddFormDisplayed(!addFormDisplayed);
    }

    const allQuotes = quoteList.map((item,index) =>{
        return (
                <s.Card key={index}>
                    <s.ImageContainer>
                        <s.ImageWrapper> 
                            <s.Image  src={'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/' + item.imageFileName} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                        </s.ImageWrapper>
                        <s.Author>{item.authorName}</s.Author>
                    </s.ImageContainer>
                    {item.quote}
                    <p>Category: {item.category} </p>
                    <s.ShowHideButton onClick={() => deleteQuote(item)}>Delete</s.ShowHideButton>
               </s.Card>)
    })

    const deleteQuote = (item) => {
        const r = window.confirm("Delete Quote of author: "+ item.authorName );
        if(r == true){ 
            console.log(item)
            const url = `https://api.illusionquote.com:443/api/deleteQuote?quoteId=${item.quoteId}`;
            axios
            .delete(url)
            .then(res => {
                window.alert('Deleted');
                seeAllQuotes(0);
            })
            .catch(err => {
                window.alert('Cant Delete');
            });
        }
    }


    return (
        <s.WholeContainer> 
            <AdminTopBar />
            <s.ShowHideButton onClick={showHideButtonHandle}>{addFormDisplayed?'Hide':'Add Quote'}</s.ShowHideButton>
            <s.Container addFormDisplayed={addFormDisplayed}>
                <s.Form onSubmit={handleFormSubmit}>
                    <h1>Add Quote</h1>

                    <label>
                        Author
                        <Select instanceId="1" options={authorList} placeholder="Select an author"  onChange={(event)=> setSelectedAuthor(event.value)}/>
                    </label>

                    <label>
                        Category
                        <Select instanceId="2" options={categoryList} placeholder="Select a category"  onChange={(event)=> setSelectedCategory(event.value)}/>
                    </label>
                    
                    <label>
                        Quote
                        <s.TextArea value={quote} onChange={e => setQuote(e.target.value)} ></s.TextArea>
                    </label>

                    <s.Button>Submit</s.Button>
                </s.Form>
            </s.Container>
            <s.ShowHideButton onClick={() => seeAllQuotes(pageOffset)}>See All Quote</s.ShowHideButton>

            <s.Row>{allQuotes}</s.Row>

            <s.PaginationDiv>
               {hasPrevious && <s.AuthorDeleteButton onClick={seePreviousQuotes}>Previous</s.AuthorDeleteButton> }
               {hasNext && <s.AuthorDeleteButton onClick={seeNextQuotes}>Next</s.AuthorDeleteButton> }
            </s.PaginationDiv>
        </s.WholeContainer>
    )
}

export default QuotesInputForm
