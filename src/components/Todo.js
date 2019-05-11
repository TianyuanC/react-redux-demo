import React from "react";
import { useActions } from "../effects/useActions";
import { toggleTodo } from "../redux/actions";

export default ({ todo }) => {
    const { toggleTodoAction } = useActions(
        {
            toggleTodoAction: id => toggleTodo(id)
        },
        []
    );
    const contentCss =
        todo && todo.completed
            ? "todo-item__text todo-item__text--completed"
            : "todo-item__text";
    return (
        <li className="todo-item" onClick={() => toggleTodoAction(todo.id)}>
            {todo && todo.completed ? "👌" : "👋"}{" "}
            <span className={contentCss}>{todo.content}</span>
        </li>
    );
};
