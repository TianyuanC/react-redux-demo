import React, { useCallback } from "react";
import { toggleTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
export default ({ todo }) => {
    const dispatch = useDispatch();
    const toggleTodoAction = useCallback(id => dispatch(toggleTodo(id)), [
        dispatch
    ]);

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
