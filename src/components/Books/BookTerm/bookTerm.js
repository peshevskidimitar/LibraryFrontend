import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.title}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <button className={"btn btn-sm btn-danger me-1"}
                   onClick={() => props.onDelete(props.term.id)}>Delete</button>
                <Link className={"btn btn-sm btn-info me-1"} onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>Edit</Link>
                <button className={"btn btn-sm btn-warning"} onClick={() => props.onBorrow(props.term.id)}>Mark
                    as Taken</button>
            </td>
        </tr>
    );
};

export default bookTerm;