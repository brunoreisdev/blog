import axios from "axios";


export class Categories {
  fetchCategories = async () => {
    const response = await axios.get("https://tech-test-backend.dwsbrazil.io/categories");
    return response.data;
  }

  fetchCategory = async(id) => {
    const response = await axios.get(`https://tech-test-backend.dwsbrazil.io/categories/${id}`);
    return response.data;
  }
};