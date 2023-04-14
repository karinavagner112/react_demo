import { useContext } from "react";
import { NavigationBarContext, Types } from "./NavigationBarProvider";

function _useNavigateBar() {
    return useContext(NavigationBarContext);
};

function createActionSetTitle(title: string) {
    return { type: Types.SetTitle, title: title };
};

function createActionOnSave(action?: () => void) {
    return { type: Types.OnSave, action: action };
};

function createActionOnDelete(action?: () => void) {
    return { type: Types.OnDelete, action: action };
};

function createActionOnRefresh(action?: () => void) {
    return { type: Types.OnRefresh, action: action };
};

function useNavigateBar() {
    const { state, dispatch } = _useNavigateBar();

    return {

        //titel setzen oder zurueckgeben 
        setTitle: (title: string): void => {
            dispatch(createActionSetTitle(title));
        },
        getTitle: (): string | undefined => {
            return state.title;
        },

        //speichern 
        onSave: (action?: () => void): void => {
            dispatch(createActionOnSave(action));
        },
        save: () => {
            state.onSave?.();
        },
        isSaveActive: (): boolean => {
            return state.onSave !== undefined;
        },

        //loeschen 
        OnDelete: (action?: () => void): void => {
            dispatch(createActionOnDelete(action));
        },
        delete: () => {
            state.onDelete?.();
        },
        isDeleteActive: (): boolean => {
            return state.onDelete !== undefined;
        },

        //update
        OnRefresh: (action?: () => void): void => {
            dispatch(createActionOnRefresh(action));
        },
        refresh: () => {
            state.onRefresh?.();
        },
        isRefreshActive: (): boolean => {
            return state.onRefresh !== undefined;
        },
    };
};

export default useNavigateBar;