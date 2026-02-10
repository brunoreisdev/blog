import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { PostsService } from "services";

export const GalleryContext = createContext(null);

const initialFilters = {
  categories: [],
  authors: [],
  search: "",
  sortBy: 0,
}

const postsService = new PostsService();

const matchGalleries = (post, filters) => {
  if(!filters.categories.length) return true
  return post.categories.some(category => filters.categories.includes(category.id))
}

const matchSearch = (post, filters) => {
   if(!filters.search) return true
  return post.title.toLowerCase().includes(filters.search.toLowerCase())
}

const matchAuthors = (post, filters) => {
  if(!filters.authors.length) return true
  return filters.authors.includes(post.authorId)
}

const sortByDate = (postFirst, postSecond, filters) => {
  const firstDate = new Date(postFirst.createdAt);
  const secondDate = new Date(postSecond.createdAt);  

  return filters.sortBy === 0 
    ? (secondDate - firstDate)
    : (firstDate - secondDate)
}

export function GalleryProvider({ children }) {
  const [posts, setPosts] = useState({});
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    postsService.fetchPosts().then(data => setPosts(data))
  }, [])

  const filteredPosts = useMemo(() => {
    if(!posts.length) return []

    const predicates = [
      matchGalleries,
      matchAuthors,
      matchSearch,
    ]

    const filteredItems = posts.filter(item => predicates.every(predicate => predicate(item, filters)));
    return filteredItems.sort((postFirst, postSecond) => sortByDate(postFirst, postSecond, filters))
  }, [posts, filters])


  return (
    <GalleryContext.Provider value={{
      posts,
      filteredPosts,
      filters,
      setFilters
    }}>
      {children}
    </GalleryContext.Provider>
  );
}