import React from "react";
import { Grid } from "./gallery.styles";
import { Card } from "components/commons";
import { useGallery } from "hooks/gallery";



export function Gallery() {
  const { filteredPosts } = useGallery();
  const render = () => {
    return (
      <>
        {filteredPosts.map(post => {
          return(
            <Card    
              key={post.id} 
              title={post.title}
              content={post.content}
              uri={post.thumbnail_url}
              createdAt={post.createdAt}
              author={post.author.name}
              categories={post.categories}
            />
          )}
        )}
      </>
    )
  }

  return (
      <Grid>
        {render()}
      </Grid>
  )
}