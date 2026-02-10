import React, { useEffect, useState } from "react";
import {
  InputWrapper,
  SearchInput,
  HeaderContainer,
  Container,
  ArrowLeftIcon,
  ExitIcon,
  ListMobile
} from "./search-mobile.styles";
import { useGallery } from "hooks/gallery";
import { useNavigate } from "react-router-dom";


export function SearchMobile({ isOpen, onClose }) {
  const { filteredPosts, filters, setFilters } = useGallery();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const filteredItems = filteredPosts.map(post => ({name: post.title, id: post.id}));
      setPosts(filteredItems);
  }, [filteredPosts])
  const goToPost = (id) => {
    onClose();
    navigate(`/post/${id}`)
  }

  const search = ({ target }) => {
    setFilters({...filters, search: target.value})
  } 
  
  
  if (!isOpen) return null;

  return (
    <Container>
      <HeaderContainer>
        <InputWrapper>
          <ArrowLeftIcon onClick={onClose}/>
          <SearchInput placeholder="Search" autoFocus onChange={search} value={filters.search}/>
          <ExitIcon onClick={onClose}/>
        </InputWrapper>
      </HeaderContainer>
      <ListMobile items={posts} onClick={goToPost}/>
    </Container>
  );

}