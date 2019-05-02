import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                [id]: {
                    id, content
                }
            }
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    completed: !state[id].completed
                }
            };
        }
        default:
            return state;
    }
}
