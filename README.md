# React-Redux Demo

Based on this [tutorial](https://react-redux.js.org/next/introduction/basic-tutorial) with minor tweaks on stylings and a few experiment on the hooks integration

## Launch script

```sh

yarn && yarn start

```

## React Hooks

```javascript
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
```

## Future

-   [x] Look into `useMemo` and `useCallback`
-   [ ] Use `styled-component` or `emotion`
-   [ ] How about Web Component?
