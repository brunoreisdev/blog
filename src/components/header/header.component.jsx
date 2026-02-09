import React, { useState } from "react";
import { HeaderWrapper,
  Logo,
  SearchIcon,
  SearchContainer,
  SearchInput,
  SearchIconMobile,
  IconSearch,
  Container
} from "./header.styles";
import dws1 from "assets/images/dws1.png";
import { SearchMobile } from "./header-mobile/search-mobile.component";
import { MetaViewport } from "./meta-viewport/meta-viewport.component";

function HeaderMobile({ onPress }) {
  return (
    <SearchIconMobile onClick={onPress}>
      <IconSearch />
    </SearchIconMobile> 
  );
}


export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <MetaViewport />
      <SearchMobile isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Container>
        <HeaderWrapper>
          <Logo src={dws1} alt="blog logo" />
          <SearchContainer>
            <SearchInput placeholder="Search" />
            <SearchIcon>
              <IconSearch />
            </SearchIcon>
          </SearchContainer>
          <HeaderMobile onPress={() => setIsSearchOpen(true)} />
        </HeaderWrapper>
      </Container>
      
    </>
  );
}