import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export default () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoAction = useCallback(input => dispatch(addTodo(input)), [
        dispatch
    ]);

    const updateInput = input => {
        setInput(input);
    };

    const handleAddTodo = () => {
        addTodoAction(input);
        setInput("");
    };
    return (
        <div>
            <input onChange={e => updateInput(e.target.value)} value={input} />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
            </button>
        </div>
    );
};
