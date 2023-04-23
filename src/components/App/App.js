import './App.css';
import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Countries from "../Countries/countries";
import LibraryRepository from "../../repository/libraryRepository";
import Authors from "../Authors/authors";
import Books from "../Books/BookList/books";
import Header from "../Header/header";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";
import Categories from "../Books/Categories/categories";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            authors: [],
            books: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <div className={"page-wrapper"}>
                <Header/>
                <BrowserRouter>
                    <Route path={"/countries"} exact render={() => <Countries countries={this.state.countries}/>}/>
                    <Route path={"/authors"} exact render={() => <Authors authors={this.state.authors}/>}/>
                    <Route path={"/books/add"} exact
                           render={() => <BookAdd categories={this.state.categories}
                                                  authors={this.state.authors}
                                                  onAddBook={this.addBook}/>}/>
                    <Route path={"/books/edit/:id"} exact
                           render={() => <BookEdit categories={this.state.categories}
                                                   authors={this.state.authors}
                                                   onEditBook={this.editBook}
                                                   book={this.state.selectedBook}/>}/>
                    <Route path={"/books"} exact render={() => <Books books={this.state.books}
                                                                      onEdit={this.getBook}
                                                                      onDelete={this.deleteBook}
                                                                      onBorrow={this.borrowBook}/>}/>
                    <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}/>
                    <Route path={"/"} exact><Redirect to={"/books"}/></Route>
                </BrowserRouter>
            </div>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.loadCountries();
        this.loadAuthors();
        this.loadBooks();
        this.loadBookCategories();
    };

    loadCountries = () => {
        LibraryRepository.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                });
            });
    };

    loadAuthors = () => {
        LibraryRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                });
            });
    };

    loadBooks = () => {
        LibraryRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                });
            });
    }

    loadBookCategories = () => {
        LibraryRepository.fetchBookCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                });
            });
    };

    getBook = (id) => {
        LibraryRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                });
            });
    };

    addBook = (title, category, authorId, availableCopies) => {
        LibraryRepository.addBook(title, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    };

    editBook = (id, title, category, authorId, availableCopies) => {
        LibraryRepository.editBook(id, title, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    };

    deleteBook = (id) => {
        LibraryRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    };

    borrowBook = (id) => {
        LibraryRepository.borrowBook(id)
            .then(() => {
                this.loadBooks();
            });
    };

}

export default App;
