import React from "react";

import { storiesOf } from "@storybook/react";

import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";
import VisibilityFilter from "../components/VisibilityFilters";
import Todo from "../components/Todo";

storiesOf("TodoApp", module).add("demo", () => (
    <Provider store={store}>
        <App />
    </Provider>
));

storiesOf("Breakdowns", module)
    .add("Visibility Filter", () => (
        <Provider store={store}>
            <VisibilityFilter />
        </Provider>
    ))
    .add("Todo Item Complete", () => (
        <Provider store={store}>
            <Todo todo={{ content: "test", completed: true }} />
        </Provider>
    ))
    .add("Todo Item Incomplete", () => (
        <Provider store={store}>
            <Todo todo={{ content: "test", completed: false }} />
        </Provider>
    ));
