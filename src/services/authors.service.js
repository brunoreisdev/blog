export class AuthorsService {
  fetchAuthors = async () => {
    return fetch("https://tech-test-backend.dwsbrazil.io/authors")
      .then(data => data.json())
      .catch(error => console.log(error));
  }

  fetchAuthor = async(id) => {
    return fetch(`https://tech-test-backend.dwsbrazil.io/authors/${id}`)
      .then(data => data.json())
      .catch(error => console.log(error));
  }
};