import React, { useReducer } from 'react';

export type NavigationContextType = {
    onSave?: () => void,
    onDelete?: () => void,
    onRefresh?: () => void,
    title?: string
};

export const initialState: NavigationContextType = {
};

type Props = {
    children: React.ReactNode
};

export const NavigationBarContext = React.createContext<{
    state: NavigationContextType,
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
});

export enum Types {
    SetTitle = 'NAVIGATIONBAR/SetTitle',
    OnDelete = 'NAVIGATIONBAR/OnDelete',
    OnSave = 'NAVIGATIONBAR/OnSave',
    OnRefresh = 'NAVIGATIONBAR/OnRefresh'
};

type Action = |
{ type: Types.SetTitle, title: string } |
{ type: Types.OnDelete, action: () => void | undefined } |
{ type: Types.OnSave, action: () => void | undefined } |
{ type: Types.OnRefresh, action: () => void | undefined };


export const NavigationBarProvider = (props: Props) => {
    const [state, dispatch] = useReducer(navigateBarReducer, initialState);
    return (
        <NavigationBarContext.Provider value={{ state, dispatch }}>
            {props.children}
        </NavigationBarContext.Provider>
    );
};

export const navigateBarReducer = (state: NavigationContextType, action: Action): NavigationContextType => {
    switch (action.type) {
        case Types.SetTitle:
            return {
                ...state,
                title: action.title
            };
        case Types.OnSave:
            return {
                ...state,
                onSave: action.action
            };
        case Types.OnDelete:
            return {
                ...state,
                onDelete: action.action
            };
        case Types.OnRefresh:
            return {
                ...state, 
                onRefresh: action.action
            };
        default:
            return state;
    }
};

