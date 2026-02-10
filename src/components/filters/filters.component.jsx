import React, { useCallback, useEffect, useState } from "react";
import { Button, FilterWrapper, Title } from "./filters.styles";
import { BsSliders2 } from "react-icons/bs";
import { H3 } from "assets/styles/default";
import { List } from "../commons/list/list.component";
import { useGallery } from "hooks/gallery";
import { AuthorsService, CategoriesService } from "services";
import { ItemsSelected } from "./components/item-selected/item-selected.component";

const categoriesService = new CategoriesService();
const authorsService = new AuthorsService();

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
      setAuthorsSelected(authorsSelected.filter(id => id !== authorId))
      return
    }
    setAuthorsSelected([...authorsSelected, authorId])
  }, [authorsSelected])

  const badgeClicked = useCallback((authorId, categoryId) => {
    if(authorId) {
      const filtered = authorsSelected.filter(id => id !== authorId)
      setAuthorsSelected(filtered)
      if(filters.authors.length) {
        setFilters({...filters, authors: filtered })
      }
      return
    }

    const filtered = categoriesSelected.filter(id => id !== categoryId)
    setCategoriesSelected(filtered)
    if(filters.categories.length){
      setFilters({...filters, categories: filtered })
    }
    return
  }, [authorsSelected, categoriesSelected, filters, setFilters])

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
      <ItemsSelected items={categoriesSelected} dataRaw={categories} onClick={(categoryId) => badgeClicked(null, categoryId)} />
      <ItemsSelected items={authorsSelected} dataRaw={authors} onClick={(authorId) => badgeClicked(authorId)} />
      <List title="Category" items={categories} onClick={categoryClicked}/>
      <List title="Author" items={authors} onClick={authorClicked} />
      <Button onClick={applyFilters}>Apply filters</Button>
    </FilterWrapper>
  );
}