import React from "react";
import { Grid } from "./gallery.styles";
import { Card } from "components/commons";
import { useGallery } from "hooks/gallery";
import { useNavigate } from "react-router-dom";



export function Gallery({ limited }) {
  const { filteredPosts } = useGallery();
  const navigate = useNavigate();
  
  const goToPost = (id) => {
    navigate(`/post/${id}`)
  }

  const postsToRender = limited ? filteredPosts.slice(0, limited) : filteredPosts;
  const render = () => {
    return (
      <>
        {postsToRender.map(post => {
          return(
            <Card    
              key={post.id} 
              title={post.title}
              content={post.content}
              uri={post.thumbnail_url}
              createdAt={post.createdAt}
              author={post.author.name}
              categories={post.categories}
              onClick={() => goToPost(post.id)}
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