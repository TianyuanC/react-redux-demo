import React, { useState } from "react";
import { useActions } from "react-redux";
import { addTodo } from "../redux/actions";

export default () => {
    const [input, setInput] = useState("");
    const { addTodoAction } = useActions(
        {
            addTodoAction: input => addTodo(input)
        },
        []
    );

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
