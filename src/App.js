import React from "react";
import { AddTodo, TodoList, VisibilityFilters } from "./components";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo List</h1>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </header>
        </div>
    );
}

export default App;
