import * as s from './Header.styles';
import {HeaderCategory} from '../../Data/HeaderCategoryData';

const Header = () => {
    return (
        <s.Container>
            <s.NavBar>
                <s.Ul>
                    {
                         HeaderCategory.map((item,index) =>{
                            return (
                                <s.LiItem key={index}> 
                                    <s.ItemRef href="https://www.w3schools.com/"  target="_blank">
                                        {item.data}
                                    </s.ItemRef>
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
