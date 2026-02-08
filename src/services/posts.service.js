import axios from "axios";


export class Posts {
  fetchPosts = async () => {
    const response = await axios.get("https://tech-test-backend.dwsbrazil.io/posts");
    return response.data;
  }

  fetchPost = async(id) => {
    const response = await axios.get(`https://tech-test-backend.dwsbrazil.io/posts/${id}`);
    return response.data;
  }
};