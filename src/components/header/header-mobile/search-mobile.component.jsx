import React from "react";
import { InputWrapper, SearchInput, HeaderContainer, Container, ArrowLeftIcon, ExitIcon  } from "./search-mobile.styles";


export function SearchMobile({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Container>
      <HeaderContainer>
        <InputWrapper>
          <ArrowLeftIcon onClick={onClose}/>
          <SearchInput placeholder="Search" autoFocus/>
          <ExitIcon onClick={onClose}/>
        </InputWrapper>
      </HeaderContainer>
    </Container>
  );

}