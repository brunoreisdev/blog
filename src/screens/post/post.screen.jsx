import { useNavigate, useParams } from "react-router-dom";
import {
  ChipsBackButton,
  ChipsIcon,
  ChipsLabel,
  Content,
  DateText,
  Divisor,
  FeaturedImage,
  ImageWrapper,
  LatestLabel,
  Loading,
  Picture,
  PostContainer,
  PostInformation,
  Text,
  UserWrapper
} from "./post.styles";
import { useEffect, useState } from "react";
import { PostsService } from "services";
import {  H1, Small } from "assets/styles/default";
import { Gallery } from "components";

const postService = new PostsService()

export function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({})
  const createdAt = new Date(post.createdAt || "").toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });


  useEffect(() => {
    postService.fetchPost(id)
      .then(data => setPost(data))
  }, [id, setPost])


  if(!Object.keys(post).length) return <Loading><Small>Loading...</Small></Loading>

  return (
    <PostContainer>
      <ChipsBackButton onClick={() => navigate(-1)}>
        <ChipsIcon />
        <ChipsLabel>Back</ChipsLabel>
      </ChipsBackButton>
      <Content>
        <H1>{post.title}</H1> 
        <UserWrapper>
          <ImageWrapper>
            <Picture src={post.author?.profilePicture} alt="user profile" />
          </ImageWrapper>
          <PostInformation>
            <Small>Written by: <strong>{post.author?.name}</strong></Small>
            <DateText>{createdAt}</DateText>
          </PostInformation>
        </UserWrapper>
        <FeaturedImage src={post.thumbnail_url} alt={post.title} />
        <Text>{post.content}</Text>
        <Divisor />
        <>
          <LatestLabel>Latest articles</LatestLabel>
          <Gallery limited={3}/>
        </>
      </Content>
    </PostContainer>
  )
}