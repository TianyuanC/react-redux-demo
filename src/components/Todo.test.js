import React from "react";
import Todo from "./Todo";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Todo", () => {
    it("completed item", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Todo todo={{ content: "test", completed: true }} />
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("incompleted item", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Todo todo={{ content: "test2", completed: false }} />
            </Provider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
