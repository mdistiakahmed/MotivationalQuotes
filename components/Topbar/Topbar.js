import * as s from './Topbar.styles'

const Topbar = () => {
    return (
        <s.Container>
            <s.Logo>
                <s.HomeURL href="https://www.w3schools.com/"  target="_blank">Inspire</s.HomeURL>
            </s.Logo>
            <s.ManuNav>
                <s.Ul> 
                    <s.Li1><s.LiA  href="https://www.w3schools.com/"  target="_blank">Story</s.LiA> </s.Li1>
                    <s.Li2><s.LiA  href="https://www.w3schools.com/"  target="_blank">Events</s.LiA> </s.Li2>
                    <s.Li3><s.LiA  href="https://www.w3schools.com/"  target="_blank">Movie Quotes</s.LiA> </s.Li3>
                    <s.Li4><s.LiA  href="https://www.w3schools.com/"  target="_blank">APJ Abdul Kalam</s.LiA> </s.Li4>
                    <s.Li5><s.LiA  href="https://www.w3schools.com/"  target="_blank">Steve jobs</s.LiA> </s.Li5>
                    <s.Li><s.LiButton>
                        <span> Menu </span>
                    </s.LiButton></s.Li>

                </s.Ul>
            </s.ManuNav>
            <div> </div>
            <s.Search>
                <form class="search-form" method="get" action="https://www.google.com/webhp?q=site:smashingmagazine.com">
                    <s.SearchInputWrapper>
                        <s.SearchInput inputmode="search" type="search"  placeholder="Search category or person..." />
                    </s.SearchInputWrapper>
                    <s.Submit type="submit"  name="submit" value="Search"  /> 
                <span></span> 
                </form>
            </s.Search>
        </s.Container>
    )
}

export default Topbar
