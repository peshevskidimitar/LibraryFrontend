import React from "react";

const categories = (props) => {
    return (
        <div className={"container my-5"}>
            <div className={"row justify-content-center"}>
                <div className={"col"}>
                    <table className={"table table-sm table-hover text-center"}>
                        <thead>
                        <tr className={"text-primary"}>
                            <th scope={"col"}>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map(category => (
                            <tr>
                                <td>{category}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default categories;