import { renderHook, waitFor } from "@testing-library/react";
import { GalleryProvider } from "./gallery.context";
import { useGallery } from "hooks/gallery";
import { act } from "react";

const wrapper = ({ children }) => <GalleryProvider>{children}</GalleryProvider>;

const Authors = {
  EmilyDavis: "c6fddf84-2f20-11ef-8f88-325096b39f47",
  MichaelJohnson: "c6fddea8-2f20-11ef-ae87-325096b39f47"
}

const Categories = {
  Travel: "a3979954-2f20-11ef-af4d-325096b39f47",
  Technology: "a3979472-2f20-11ef-a347-325096b39f47"
}


test('Should filter items by one category', async () => {
  const { result } = renderHook(() => useGallery(), { wrapper }); 
  act(() => {
    result.current.setFilters({ ...result.current.filters, categories: [Categories.Travel] });
  });

  await waitFor(() => {
    expect(result.current.filteredPosts).toHaveLength(1);
  }, { timeout: 3000 });
});

test('Should filter items by multiple category', async () => {
  const { result } = renderHook(() => useGallery(), { wrapper }); 
  act(() => {
    result.current.setFilters({ ...result.current.filters, categories: [Categories.Travel, Categories.Technology] });
  });

  await waitFor(() => {
    expect(result.current.filteredPosts).toHaveLength(2);
  }, { timeout: 3000 });
});



test('Should filter items by one author', async () => {
  const { result } = renderHook(() => useGallery(), { wrapper }); 
  act(() => {
    result.current.setFilters({ ...result.current.filters, authors: [Authors.EmilyDavis] });
  });

  await waitFor(() => {
    expect(result.current.filteredPosts).toHaveLength(6);
  }, { timeout: 3000 });  
});

test('Should filter items by multiple author', async () => {
  const { result } = renderHook(() => useGallery(), { wrapper }); 
  act(() => {
    result.current.setFilters({ ...result.current.filters, authors: [Authors.EmilyDavis, Authors.MichaelJohnson] });
  });

  await waitFor(() => {
    expect(result.current.filteredPosts).toHaveLength(12);
  }, { timeout: 3000 });  
});
