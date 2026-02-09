export class PostsService {
  fetchPosts = async () => {
    return await fetch("https://tech-test-backend.dwsbrazil.io/posts")
    .then(data => data.json())
    .catch(error => console.log(error));;
  }

  fetchPost = async(id) => {
    return await fetch(`https://tech-test-backend.dwsbrazil.io/posts/${id}`)
    .then(data => data.json())
    .catch(error => console.log(error));
  }
};