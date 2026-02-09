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


const filteredPostsInitial = [
  {
    id: "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd",
    title: "Tech Innovations in Healthcare",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
    thumbnail_url: "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-1.jpg",
    authorId: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    createdAt: "2026-01-30T12:36:34.607Z",
    updatedAt: "2026-01-30T12:36:34.607Z",
    categories: [
      {
        id: "a3979472-2f20-11ef-a347-325096b39f47",
        name: "Technology",
        createdAt: "2026-01-30T12:36:34.584Z",
        updatedAt: "2026-01-30T12:36:34.714Z",
        postId: "cc8a8c63-2f82-4745-8b6e-28f88ff73fdd"
      }
    ],
    author: {
      id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
      name: "Emily Davis",
      profilePicture: "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
      createdAt: "2026-01-20T12:36:34.599Z",
      updatedAt: "2026-01-30T12:36:34.599Z"
    }
  },
  {
    id: "4b7c7be8-b6e0-40f4-a971-45fd1d8575c2",
    title: "Climate Change and Its Effects",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
    thumbnail_url: "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-2.jpg",
    authorId: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    createdAt: "2026-01-27T12:36:34.607Z",
    updatedAt: "2026-01-30T12:36:34.607Z",
    categories: [
      {
        id: "a397972e-2f20-11ef-8c1b-325096b39f47",
        name: "Science",
        createdAt: "2026-01-30T12:36:34.584Z",
        updatedAt: "2026-01-30T12:36:34.718Z",
        postId: "4b7c7be8-b6e0-40f4-a971-45fd1d8575c2"
      }
    ],
    author: {
      id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
      name: "Emily Davis",
      profilePicture: "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
      createdAt: "2026-01-30T12:36:34.599Z",
      updatedAt: "2026-01-30T12:36:34.599Z"
    }
  },
  {
    id: "6799f738-8bb3-43fa-8ff2-2733c60bc46d",
    title: "Fitness Routines for Athletes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
    thumbnail_url: "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-3.jpg",
    authorId: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    createdAt: "2026-01-20T12:36:34.607Z",
    updatedAt: "2026-01-30T12:36:34.607Z",
    categories: [
      {
        id: "a39797d8-2f20-11ef-beca-325096b39f47",
        name: "Sports",
        createdAt: "2026-01-30T12:36:34.584Z",
        updatedAt: "2026-01-30T12:36:34.721Z",
        postId: "6799f738-8bb3-43fa-8ff2-2733c60bc46d"
      }
    ],
    author: {
      id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
      name: "Emily Davis",
      profilePicture: "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
      createdAt: "2026-01-30T12:36:34.599Z",
      updatedAt: "2026-01-30T12:36:34.599Z"
    }
  },
  {
    id: "24c69a24-e582-4149-8307-6e2520cb50a6",
    title: "Best Hiking Trails in Asia",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
    thumbnail_url: "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-4.jpg",
    authorId: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    createdAt: "2026-01-21T12:36:34.607Z",
    updatedAt: "2026-01-30T12:36:34.607Z",
    categories: [
      {
        id: "a3979954-2f20-11ef-af4d-325096b39f47",
        name: "Travel",
        createdAt: "2026-01-30T12:36:34.584Z",
        updatedAt: "2026-01-30T12:36:34.724Z",
        postId: "24c69a24-e582-4149-8307-6e2520cb50a6"
      }
    ],
    author: {
      id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
      name: "Emily Davis",
      profilePicture: "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
      createdAt: "2026-01-30T12:36:34.599Z",
      updatedAt: "2026-01-30T12:36:34.599Z"
    }
  },
  {
    id: "82fdea80-5b49-44ea-99df-47814c564d1c",
    title: "Healthy Eating Habits",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Blandit aliquam etiam erat velit scelerisque in dictum non. Urna neque viverra justo nec ultrices. At elementum eu facilisis sed odio. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eleifend quam adipiscing vitae proin sagittis nisl. Quam id leo in vitae turpis massa sed. Non pulvinar neque laoreet suspendisse. Dui id ornare arcu odio ut sem. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Tempor id eu nisl nunc mi ipsum faucibus. Fames ac turpis egestas maecenas pharetra convallis. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus in hendrerit gravida rutrum quisque non tellus. Non odio euismod lacinia at quis risus sed vulputate. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPlacerat orci nulla pellentesque dignissim enim sit amet. Dui id ornare arcu odio ut sem. Rhoncus dolor purus non enim praesent elementum. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Erat imperdiet sed euismod nisi porta lorem. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur. Facilisis sed odio morbi quis commodo odio aenean. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Suscipit tellus mauris a diam maecenas sed enim ut. Nunc sed velit dignissim sodales. Quisque egestas diam in arcu cursus euismod quis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Pretium vulputate sapien nec sagittis aliquam. Cras tincidunt lobortis feugiat vivamus at augue eget. Aliquam ultrices sagittis orci a scelerisque. Luctus venenatis lectus magna fringilla urna porttitor. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet aliquam id diam maecenas ultricies mi eget mauris.\n\nId interdum velit laoreet id donec ultrices tincidunt. Pretium vulputate sapien nec sagittis aliquam. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor vitae purus faucibus ornare suspendisse sed nisi. Lacus sed turpis tincidunt id aliquet. Egestas dui id ornare arcu odio ut sem. Sed elementum tempus egestas sed sed risus pretium. Non odio euismod lacinia at quis risus sed vulputate odio. Semper eget duis at tellus at urna condimentum. Viverra ipsum nunc aliquet bibendum enim. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Feugiat nisl pretium fusce id. Leo in vitae turpis massa sed elementum tempus. Feugiat in fermentum posuere urna. Molestie nunc non blandit massa enim nec dui.",
    thumbnail_url: "https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-5.jpg",
    authorId: "c6fddf84-2f20-11ef-8f88-325096b39f47",
    createdAt: "2026-01-30T12:36:34.607Z",
    updatedAt: "2026-01-30T12:36:34.607Z",
    categories: [
      {
        id: "a3979aa8-2f20-11ef-ba29-325096b39f47",
        name: "Food",
        createdAt: "2026-01-30T12:36:34.584Z",
        updatedAt: "2026-01-30T12:36:34.727Z",
        postId: "82fdea80-5b49-44ea-99df-47814c564d1c"
      }
    ],
    author: {
      id: "c6fddf84-2f20-11ef-8f88-325096b39f47",
      name: "Emily Davis",
      profilePicture: "https://dws-tech-test-assets.s3.amazonaws.com/images/avataaars-3.png",
      createdAt: "2026-01-30T12:36:34.599Z",
      updatedAt: "2026-01-30T12:36:34.599Z"
    }
  },
]

export function GalleryProvider({ children }) {
  const [posts, setPosts] = useState(filteredPostsInitial);
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