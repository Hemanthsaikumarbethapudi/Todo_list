import React from "react";

const Todolist = (props) => {
    return (
        <li className="Todolist">
            <span>

                {props.completed ? <></> : <input type="checkbox" />}
                <span className="text">{props.text}</span>

            </span>
            <p>.....</p>
        </li>
    );
};


export default Todolist;