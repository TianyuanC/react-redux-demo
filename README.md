# React-Redux Demo

Based on this [tutorial](https://react-redux.js.org/next/introduction/basic-tutorial) with minor tweaks on stylings and a few experiment on the hooks integration

## Launch script

```sh

yarn && yarn start

```

## React Hooks

```javascript
import { useActions, useSelector } from "react-redux";

// connect
export const useFilter = () => {
    // mapDispatchToProps
    const { setFilterAction } = useActions(
        {
            setFilterAction: filter => setFilter(filter)
        },
        []
    );
    // mapStateToProps
    const activeFilter = useSelector(state => state.visibilityFilter);
    return {
        setFilterAction,
        activeFilter
    };
};
```

## Future

-   Look into `useMemo` and `useCallback`
-   Use `styled-component` or `emotion`
-   How about Web Component?
