import  { useState, useEffect } from 'react';
import axios from 'axios';
import * as s from './AuthorInputForm.styles';
import AdminTopBar from './AdminTopBar';

const AuthorInputForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState(null);
    const [fileSize, setFileSize] = useState(0);

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [authorList, setAuthorList] = useState([]);

    const [addFormDisplayed, setAddFormDisplayed] = useState(false);

    // ------pagination variables ------
    const pageLimit = 1;
    const [pageOffset, setPageOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("imgFile", picture);

        if(fileSize > 1000) {
            window.alert('File size is greater then 10kb')
            return;
        }


        axios
        .post('https://api.illusionquote.com:443/api/addAuthor', formData)
        .then((res) => {
            alert("File Upload success");
            seeAllAuthor(pageOffset);
        })
        .catch((err) => alert("File Upload Error"));

        setName("");
        setDescription("");
        setPicture(null);
    }

    const fileHandler = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(event.target.files[0])
        const file = event.target.files[0];
        setFileSize(Math.floor(file.size/1024));
        setPicture(file);
    }

    const seeNextAuthors = () => {
        seeAllAuthor(pageOffset + pageLimit);
    }

    const seePreviousAuthors = () => {
        seeAllAuthor(pageOffset - pageLimit); 
    }

    const seeAllAuthor = (xx) => {
        setPageOffset(xx);
        console.log('button clicked');
        axios.get('https://api.illusionquote.com:443/api/getAllAuthor',{
            params: {
              offset: xx,
              limit: pageLimit
             }
          })
        .then(res => {
            console.log(res);
            setAuthorList(res.data.authorList);
            setHasNext(res.data.hasNext);
            setHasPrevious(res.data.hasPrevious);
        })
    }

    const deleteAuthor = (item) => {
        const r = window.confirm("Do you really want to Delete author : " + item.name);
        if(r == true){ 
            const url = `https://api.illusionquote.com:443/api/deleteAuthor?authorId=${item.id}`;
            axios
            .delete(url)
            .then(res => {
                window.alert('Deleted');
                seeAllAuthor(pageOffset);
            })
            .catch(err => {
                window.alert('Cant Delete');
            });
        }
    }

    const allAuthors = authorList.map((item,index) =>{
        return (
                <s.Card key={item.id}>
                    <s.ImageContainer>
                        <s.ImageWrapper> 
                            <s.Image  src={'https://illusionquote-author-images.s3.ap-south-1.amazonaws.com/' + item.imageFileName} loading="eager" decoding="async" width="100" height="100" alt="Berwyn Powell" />
                        </s.ImageWrapper>
                        <s.Author>{item.name}</s.Author>
                    </s.ImageContainer>
                    {item.description}
                    <s.AuthorDeleteButton onClick={() => deleteAuthor(item)}> Delete </s.AuthorDeleteButton>
               </s.Card>)
    })

    return (
        <s.WholeContainer> 
            <AdminTopBar />
            <s.AuthorDeleteButton onClick={() => setAddFormDisplayed(!addFormDisplayed)}>{addFormDisplayed?'Hide Add Form':'Add Form'}</s.AuthorDeleteButton>
            <s.Container addFormDisplayed={addFormDisplayed}>
                <s.Form onSubmit={handleSubmit}>
                    <h1>Add an Author</h1>

                    <label>
                        Author Name:
                        <s.Input
                        name="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required />
                    </label>
                    
                    <label>
                        Author Description:
                        <s.TextArea value={description} onChange={e => setDescription(e.target.value)} ></s.TextArea>
                    </label>

                    <label>
                        Picture: 
                        <input type="file"  accept="image/*" onChange={fileHandler}
                        required/>
                    </label>
                    <s.Button>Submit</s.Button>
                </s.Form>

                <s.ImagePreview> 
                    {selectedFile &&  <img src={preview}  width="200" height="200"/> }
                    {selectedFile &&  <p>File Size :  {fileSize} kb</p> }
                    <p>Max Size :  1 MB</p>
                </s.ImagePreview>
                
            </s.Container>

             <s.AuthorDeleteButton onClick={() => seeAllAuthor(pageOffset)}>See All Author</s.AuthorDeleteButton>

            <s.Row>{allAuthors}</s.Row>

            <s.PaginationDiv>
               {hasPrevious && <s.AuthorDeleteButton onClick={seePreviousAuthors}>Previous</s.AuthorDeleteButton> }
               {hasNext && <s.AuthorDeleteButton onClick={seeNextAuthors}>Next</s.AuthorDeleteButton> }
            </s.PaginationDiv>
            
            

        </s.WholeContainer>
    )
}

export default AuthorInputForm
