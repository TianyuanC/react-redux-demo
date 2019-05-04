import React from "react";
import { renderHook, act } from "react-hooks-testing-library";
import { useFilter } from "./useFilter";
import { Provider } from "react-redux";
import store from "../redux/store";
import { VISIBILITY_FILTERS } from "../constants";

test("should set filter", () => {
    const wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );
    const { result } = renderHook(() => useFilter(), { wrapper });

    act(() => {
        result.current.setFilterAction(VISIBILITY_FILTERS.ALL);
    });

    expect(result.current.activeFilter).toBe(VISIBILITY_FILTERS.ALL);

    act(() => {
        result.current.setFilterAction(VISIBILITY_FILTERS.COMPLETED);
    });

    expect(result.current.activeFilter).toBe(VISIBILITY_FILTERS.COMPLETED);
});
