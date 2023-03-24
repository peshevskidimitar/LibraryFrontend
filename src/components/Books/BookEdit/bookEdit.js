import React from "react";
import {useHistory} from "react-router-dom";

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        "title": "",
        "category": "",
        "authorId": 0,
        "availableCopies": 0
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const title = formData.title !== "" ? formData.title : props.book.title;
        const category = formData.category !== "" ? formData.category : props.book.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, title, category, authorId, availableCopies);
        history.push("/books");
    }

    return (
        <div className={"container my-5"}>
            <div className={"row justify-content-center"}>
                <div className={"col-6"}>
                    <form onSubmit={onFormSubmit}>
                        <div className={"form-floating mb-3"}>
                            <input type={"text"} name={"title"} className={"form-control"} id={"title"}
                                   defaultValue={props.book.title} onChange={handleChange} required/>
                            <label form={"title"}>Title</label>
                        </div>
                        <div className={"form-floating mb-3"}>
                            <select name={"category"} className={"form-select"} id={"category"} onChange={handleChange}
                                    required>
                                <option selected value={""}>Choose a book category</option>
                                {props.categories.map((category) => {
                                    if (props.book.category !== undefined && category === props.book.category)
                                        return (<option selected value={category.toString()}>{category}</option>);
                                    else
                                        return (<option value={category.toString()}>{category}</option>);
                                })}
                            </select>
                            <label form={"category"}>Category</label>
                        </div>
                        <div className={"form-floating mb-3"}>
                            <select name={"authorId"} className={"form-select"} id={"author"} onChange={handleChange}
                                    required>
                                <option selected value={""}>Choose an author</option>
                                {props.authors.map((author) => {
                                    if (props.book.author !== undefined && author.id === props.book.author.id)
                                        return (<option selected value={author.id}>{author.name} {author.surname}</option>);
                                    else
                                        return (<option value={author.id}>{author.name} {author.surname}</option>);
                                })}
                            </select>
                            <label form={"author"}>Author</label>
                        </div>
                        <div className={"form-floating mb-3"}>
                            <input type={"number"} name={"availableCopies"} className={"form-control"}
                                   id={"availableCopies"} defaultValue={props.book.availableCopies} onChange={handleChange}
                                   required/>
                            <label form={"availableCopies"}>Available copies</label>
                        </div>
                        <button id={"submit"} type={"submit"} className={"btn btn-primary"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default BookEdit;