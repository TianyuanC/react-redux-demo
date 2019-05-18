import React from "react";
import { AddTodo, TodoList, VisibilityFilters, UndoRedo } from "./components";
import "./App.css";
import { Provider } from "react-redux";
import initStore from "./redux/store";

const TodoApp = ({ note }) => (
    <Provider store={initStore()}>
        <h1>Todo List {note}</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
        <UndoRedo />
    </Provider>
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TodoApp note={1} />
                <TodoApp note={2} />
                <TodoApp note={3} />
            </header>
        </div>
    );
}

export default App;
