import React from "react";
import { AddTodo, TodoList, VisibilityFilters } from "./components";
import "./App.css";

const TodoApp = ({ note }) => (
    <>
        <h1>Todo List {note}</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
    </>
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoApp />
            </header>
        </div>
    );
}

export default App;
