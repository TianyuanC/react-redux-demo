import React from "react";
import { useSelector, useActions } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

export default () => {
    const { setFilterAction } = useActions(
        {
            setFilterAction: filter => setFilter(filter)
        },
        []
    );

    const activeFilter = useSelector(state => state.visibilityFilter);

    return (
        <div className="App-link visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                const filterCss =
                    currentFilter === activeFilter
                        ? "filter filter--active"
                        : "filter";
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={filterCss}
                        onClick={() => {
                            setFilterAction(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};
