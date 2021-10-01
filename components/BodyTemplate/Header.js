import * as s from './Header.styles';
import {HeaderCategory} from '../../Data/HeaderCategoryData';
import Link from 'next/link';

const Header = (props) => {
    const {
        headerItems=[]
    } = props;

    return (
        <s.Container>
            <s.NavBar>
                <s.Ul>
                    {
                         headerItems.map((item,index) =>{
                            return (
                                <s.LiItem key={index}> 
                                    <Link href={"/details?category="+item.data}>
                                        <s.ItemRef>
                                            {item.data}
                                        </s.ItemRef>
                                    </Link>
                                </s.LiItem>
                                )
                        })
                    }
                </s.Ul>
            </s.NavBar>
        </s.Container>
    )
}

export default Header
