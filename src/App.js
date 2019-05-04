import React from "react";
import { AddTodo, TodoList, VisibilityFilters } from "./components";
import "./App.css";

const TodoApp = ({ id }) => (
    <>
        <h1>Todo List {id}</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
    </>
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoApp id={1} />
            </header>
        </div>
    );
}

export default App;
