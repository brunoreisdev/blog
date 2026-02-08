import axios from "axios";


export class Authors {
  fetchAuthors = async () => {
    const response = await axios.get("https://tech-test-backend.dwsbrazil.io/authors");
    return response.data;
  }

  fetchAuthor = async(id) => {
    const response = await axios.get(`https://tech-test-backend.dwsbrazil.io/authors/${id}`);
    return response.data;
  }
};