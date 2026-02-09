import React, { useCallback, useEffect, useState } from "react";
import { Badge, Button, ChipsIcon, Content, FilterWrapper, Title } from "./filters.styles";
import { BsSliders2 } from "react-icons/bs";
import { H3 } from "assets/styles/default";
import { List } from "../commons/list/list.component";
import { useGallery } from "hooks/gallery";
import { AuthorsService, CategoriesService } from "services";
import { ChipsLabel } from "./filters-mobile/filters-mobile.styles";

const categoriesService = new CategoriesService();
const authorsService = new AuthorsService();


function ItemsSelected({ items, dataRaw , onClick}) {
  if(!items.length) return null
  
  return (
    <Content>
      {items.map(category => {
        const name = dataRaw.find(item => item.id === category).name
        return(
        <Badge onClick={() => onClick(category)}>
          <ChipsLabel>{name}</ChipsLabel>
          <ChipsIcon  />
        </Badge>
      )}
    )}
    </Content>
  )
}

export function Filters() {
  const { setFilters, filters } = useGallery();
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [authorsSelected, setAuthorsSelected] = useState([]);

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
      setCategoriesSelected(categoriesSelected.filter(id => id !== categoryId))
      return
    }
    setCategoriesSelected([...categoriesSelected, categoryId])
    
  }, [categoriesSelected])

  const authorClicked = useCallback((authorId) => {
    if(authorsSelected.includes(authorId)) {
      setAuthorsSelected([...authorsSelected, authorsSelected.filter(id => id !== authorId)])
      return
    }
    setAuthorsSelected([...authorsSelected, authorId])
  }, [authorsSelected])


  const applyFilters = () => {
    setFilters({
      ...filters,
      categories: categoriesSelected,
      authors: authorsSelected
    })
  }

  return (
    <FilterWrapper>
      <Title>
        <BsSliders2 size={24}/>
        <H3>Filters</H3>
      </Title>
      <ItemsSelected items={categoriesSelected} dataRaw={categories} onClick={categoryClicked} />
      <List title="Category" items={categories} onClick={categoryClicked}/>
      <List title="Author" items={authors} onClick={authorClicked} />
      <Button onClick={applyFilters}>Apply filters</Button>
    </FilterWrapper>
  );
}