import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
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
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);
