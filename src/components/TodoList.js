import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

export default () => {
    const todos = useSelector(state =>
        getTodosByVisibilityFilter(state, state.visibilityFilter)
    );

    return (
        <ul className="todo-list">
            {todos && todos.length
                ? todos.map((todo, index) => {
                      return (
                          <Todo key={`todo-${todo.id}-${index}`} todo={todo} />
                      );
                  })
                : "No todos, yay!"}
        </ul>
    );
};
