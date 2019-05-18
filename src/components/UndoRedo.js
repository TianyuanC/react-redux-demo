import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUndoRedo } from "../redux/selectors";
import { ActionCreators as UndoActionCreators } from "redux-undo";

export default () => {
    const [canUndo, canRedo] = useSelector(state => getUndoRedo(state));
    const dispatch = useDispatch();

    const onUndo = useCallback(() => dispatch(UndoActionCreators.undo()), [
        dispatch
    ]);
    const onRedo = useCallback(() => dispatch(UndoActionCreators.redo()), [
        dispatch
    ]);
    return (
        <p>
            <button onClick={onUndo} disabled={!canUndo}>
                Undo
            </button>
            <button onClick={onRedo} disabled={!canRedo}>
                Redo
            </button>
        </p>
    );
};
