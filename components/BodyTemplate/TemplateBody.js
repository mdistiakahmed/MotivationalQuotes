import Header from './Header'
import Main from './Main';

const TemplateBody = (props) => {
    const {
        backgroundImage = '',
        headerItems=[],
        quoteList=[]
    } = props;

    return (
        <div>
            <Header headerItems={headerItems}/>
            <Main backgroundImage={backgroundImage} quoteList={quoteList}/>
        </div>
    )
}

export default TemplateBody
