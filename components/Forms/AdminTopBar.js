import * as s from './AdminTopBar.styles';
import Link from 'next/link';

const AdminTopBar = () => {
    return (
        <s.Container>
            
            <s.Logo>
                <Link href="/">
                    <s.HomeURL>Inspire_Life</s.HomeURL>
                </Link>
            </s.Logo>
            <s.ManuNav>
                <s.Ul> 
                    <s.Li1>
                        <Link href="/author">
                            <s.LiA>Authors Control</s.LiA>
                        </Link>
                     </s.Li1>
                    <s.Li2>
                        <Link href="/quotesControl">
                            <s.LiA>Quotes Control</s.LiA>
                        </Link>
                    </s.Li2>

                </s.Ul>
            </s.ManuNav>
            <div> </div>
            <s.ButtonContainer>
                <p>Select Theme </p>
                <s.Button>light</s.Button>
                <s.Button>Dark</s.Button>
                <s.Button>Joy</s.Button>
            </s.ButtonContainer>
        </s.Container>
    )
}

export default AdminTopBar
