import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todos;


export const getTodos = store =>
    Object.keys(getTodosState(store)).map(id => getTodosState(store)[id])

export const getVisibleTodos = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
