import axios from "../axios/axios";

const LibraryRepository = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchBookCategories: () => {
        return axios.get("/books/categories");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    addBook: (title, category, authorId, availableCopies) => {
      return axios.post("/books/add", {
         "title": title,
         "category": category,
         "authorId": authorId,
         "availableCopies": availableCopies
      });
    },
    editBook: (id, title, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "title": title,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    borrowBook: (id) => {
        return axios.put(`/books/borrow/${id}`);
    }
};

export default LibraryRepository;