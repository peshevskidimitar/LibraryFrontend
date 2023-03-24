import React from "react";
import ReactPaginate from "react-paginate";
import BookTerm from "../BookTerm/bookTerm";

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        };
    }

    render() {
        const offset = this.state.page * this.state.size;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container my-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"col text-right"}>
                        <a href={"/books/add"} className={"btn btn-dark"}>Add new book</a>
                    </div>
                </div>
                <div className={"row justify-content-center"}>
                    <div className={"col"}>
                        <table className={"table table-sm table-hover text-center"}>
                            <thead>
                            <tr className={"text-primary"}>
                                <th scope={"col"}>Title</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                                <th scope={"col"}></th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ReactPaginate previousLabel={"Previous"}
                               nextLabel={"Next"}
                               breakLabel={<a href="/#">...</a>}
                               pageClassName={"page-item"}
                               previousClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               pageLinkClassName={"page-link"}
                               nextClassName={"page-item"}
                               nextLinkClassName={"page-link"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageChange}
                               containerClassName={"pagination justify-content-center"}
                               activeClassName={"active"}/>

            </div>
        );
    }

    handlePageChange = (data) => {
        let selectedPage = data.selected;
        this.setState({
            page: selectedPage
        });
    };

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map(book => {
            return <BookTerm
                onEdit={this.props.onEdit}
                onDelete={this.props.onDelete}
                onBorrow={this.props.onBorrow}
                term={book}/>
        }).filter((product, index) => index >= offset && index < nextPageOffset);
    };

}

export default Books;