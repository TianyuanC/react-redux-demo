import React from "react";
import { AddTodo, TodoList, VisibilityFilters, UndoRedo } from "./components";
import "./App.css";

const TodoApp = ({ note }) => (
    <>
        <h1>Todo List {note}</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
        <UndoRedo />
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
