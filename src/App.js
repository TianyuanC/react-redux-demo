import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="todo-app">
                    <h1>Todo List</h1>
                    <AddTodo />
                    <TodoList />
                    <VisibilityFilters />
                </div>
            </header>
        </div>
    );
}

export default App;
