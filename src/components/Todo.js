import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
    const contentCss =
        todo && todo.completed
            ? "todo-item__text todo-item__text--completed"
            : "todo-item__text";
    return (
        <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
            {todo && todo.completed ? "👌" : "👋"}{" "}
            <span className={contentCss}>{todo.content}</span>
        </li>
    );
};

export default connect(
    null,
    { toggleTodo }
)(Todo);
