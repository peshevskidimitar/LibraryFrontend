import React from "react";

const authors = (props) => {
    return (
        <div className={"container my-5"}>
            <div className={"row justify-content-center"}>
                <div className={"col"}>
                    <table className={"table table-sm table-hover text-center"}>
                        <thead>
                        <tr className={"text-primary"}>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map(author => (
                            <tr>
                                <td>{author.name}</td>
                                <td>{author.surname}</td>
                                <td>{author.country.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default authors;