import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getVisibleTodos } from "../redux/selectors";

export default () => {
    const todos = useSelector(state => getVisibleTodos(state));

    return (
        <ul className="todo-list">
            {todos && todos.length > 0
                ? todos.map((todo, index) => {
                      return (
                          <Todo key={`todo-${todo.id}-${index}`} todo={todo} />
                      );
                  })
                : "No todos, yay!"}
        </ul>
    );
};
