import { GalleryContext } from "context/gallery.context";
import { useContext } from "react";

export function useGallery() {
  const galleryContext = useContext(GalleryContext)

  if(!galleryContext){
    throw new Error("useGallery must be used within a GalleryProvider")
  }

  return galleryContext;
}