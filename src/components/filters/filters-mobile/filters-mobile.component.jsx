import React, { useCallback, useEffect, useState } from "react";
import {
  ChipsFilters,
  ChipsIcon,
  ChipsIconX,
  ChipsLabel,
  ChipsWrapper,
  FilterWrapper,
  ListMobile,
  Modal
} from "./filters-mobile.styles";
import { useGallery } from "hooks/gallery";
import { AuthorsService, CategoriesService } from "services";
import { Badge, Content } from "../filters.styles";

const categoriesService = new CategoriesService();
const authorsService = new AuthorsService();


function FiltersChips({ label, onClick, isClicked }) {
  return (
    <ChipsWrapper onClick={onClick} style={{ backgroundColor: isClicked ? "black" : "white" }}>
      <ChipsLabel>{label}</ChipsLabel>
      <ChipsIcon />
    </ChipsWrapper>
  )
}

function ItemsSelected({ items, dataRaw , onClick}) {
  if(!items.length) return null
  
  return (
    <Content>
      {items.map(category => {
        const name = dataRaw.find(item => item.id === category).name
        return(
        <Badge onClick={() => onClick(category)}>
          <ChipsLabel>{name}</ChipsLabel>
          <ChipsIconX  />
        </Badge>
      )}
    )}
    </Content>
  )
}

export function FiltersMobile() {
  const { setFilters, filters } = useGallery();
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [authorsSelected, setAuthorsSelected] = useState([]);
  const [modalCategoryIsOpen, setModalCategoryIsOpen] = useState(false);
  const [modalAuthorIsOpen, setModalAuthorIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      return await categoriesService.fetchCategories()
        .then(categories => setCategories(categories));
    }
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchAuthors = async () => {
      return await authorsService.fetchAuthors()
        .then(authors => setAuthors(authors));
    }
    fetchAuthors();
  }, [])

  const categoryClicked = useCallback((categoryId) => {
    if(categoriesSelected.includes(categoryId)) {
      const filtered = categoriesSelected.filter(id => id !== categoryId)
      setCategoriesSelected(filtered)
      setFilters({...filters, categories: filtered })
      return
    }
    setCategoriesSelected([...categoriesSelected, categoryId])
    setFilters({...filters, categories: [...categoriesSelected, categoryId] })
  }, [categoriesSelected])

  const authorClicked = useCallback((authorId) => {
    if(authorsSelected.includes(authorId)) {
      const filtered = authorsSelected.filter(id => id !== authorId)
      setAuthorsSelected(filtered)
      setFilters({...filters, authors: filtered })
      return
    }
    setAuthorsSelected([...authorsSelected, authorId])
    setFilters({...filters, authors: [...authorsSelected, authorId] })
  }, [authorsSelected])


  const handleModalAuthor = () =>{
    setModalAuthorIsOpen(!modalAuthorIsOpen)
    setModalCategoryIsOpen(false)
  }
  const handleModalCategory = () =>{
    setModalCategoryIsOpen(!modalCategoryIsOpen)
    setModalAuthorIsOpen(false)
  }

  return (
    <FilterWrapper>
      <ChipsFilters>
        <FiltersChips label="Category" onClick={handleModalCategory} isClicked={modalCategoryIsOpen}/>
        <Modal style={{ display: modalCategoryIsOpen ? 'flex' : 'none' }}>
          <ListMobile items={categories} onClick={categoryClicked}/>
          <ItemsSelected items={categoriesSelected} dataRaw={categories} onClick={categoryClicked} />
        </Modal>
      </ChipsFilters>
      <ChipsFilters>
        <FiltersChips label="Author" onClick={handleModalAuthor}/>
        <Modal style={{ display: modalAuthorIsOpen ? 'flex' : 'none' }}>
          <ListMobile items={authors} onClick={authorClicked}/>
          <ItemsSelected items={authorsSelected} dataRaw={authors} onClick={authorClicked} />
        </Modal>
      </ChipsFilters>
    </FilterWrapper>
  );
}