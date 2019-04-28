import { useActions, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

export const useFilter = () => {
    const { setFilterAction } = useActions(
        {
            setFilterAction: filter => setFilter(filter)
        },
        []
    );
    const activeFilter = useSelector(state => state.visibilityFilter);
    return {
        setFilterAction,
        activeFilter
    };
};
