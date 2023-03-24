import React from "react";

const countries = (props) => {
    return (
        <div className={"container my-5"}>
            <div className={"row justify-content-center"}>
                <div className={"col"}>
                    <table className={"table table-sm table-hover text-center"}>
                        <thead>
                        <tr className={"text-primary"}>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.countries.map(country => (
                            <tr>
                                <td>{country.name}</td>
                                <td>{country.continent}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default countries;