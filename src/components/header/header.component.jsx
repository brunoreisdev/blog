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
import { useGallery } from "hooks/gallery";

function HeaderMobile({ onPress }) {
  return (
    <SearchIconMobile onClick={onPress}>
      <IconSearch />
    </SearchIconMobile> 
  );
}


export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { filters, setFilters } = useGallery();

  const search = ({ target }) => {
    setFilters({...filters, search: target.value})
  } 

  return (
    <>
      <MetaViewport />
      <SearchMobile isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}/>
      <Container>
        <HeaderWrapper>
          <Logo src={dws1} alt="blog logo" />
          <SearchContainer>
            <SearchInput placeholder="Search" onChange={search} value={filters.search}/>
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