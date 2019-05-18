import { VISIBILITY_FILTERS } from "../constants";

import { createSelector } from "reselect";

export const getTodosState = store => store.todos.present;
export const getVisibilityFilter = store => store.visibilityFilter;

export const getTodos = createSelector(
    getTodosState,
    state => Object.keys(state).map(id => state[id])
);

export const getVisibleTodos = createSelector(
    [getTodos, getVisibilityFilter],
    (todos, visibilityFilter) => {
        switch (visibilityFilter) {
            case VISIBILITY_FILTERS.COMPLETED:
                return todos.filter(todo => todo.completed);
            case VISIBILITY_FILTERS.INCOMPLETE:
                return todos.filter(todo => !todo.completed);
            case VISIBILITY_FILTERS.ALL:
            default:
                return todos;
        }
    }
);

export const getUndoRedo = store => [
    store.todos.past.length > 0,
    store.todos.future.length > 0
];
