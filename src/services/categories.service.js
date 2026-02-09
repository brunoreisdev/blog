export class CategoriesService {
  fetchCategories = async () => {
    return fetch("https://tech-test-backend.dwsbrazil.io/categories")
      .then(data => data.json())
      .catch(error => console.log(error));
  }

  fetchCategory = async(id) => {
    return fetch(`https://tech-test-backend.dwsbrazil.io/categories/${id}`)
      .then(data => data.json())
      .catch(error => console.log(error));
  } 
};