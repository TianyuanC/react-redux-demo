import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import { useCallback } from "react";

export const useFilter = () => {
    const dispatch = useDispatch();

    const setFilterAction = useCallback(filter => dispatch(setFilter(filter)), [
        dispatch
    ]);

    const activeFilter = useSelector(state => state.visibilityFilter);
    return {
        setFilterAction,
        activeFilter
    };
};
