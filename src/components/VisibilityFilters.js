import React from "react";
import { useFilter } from "../effects/useFilter";
import { VISIBILITY_FILTERS } from "../constants";

export default () => {
    const { setFilterAction, activeFilter } = useFilter();

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
