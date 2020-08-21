//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//any global state will enlist here 
const initialState = {
    transactions:[
        {
            id: 1,
            text: 'Nike Air Force Sneakers',
            amount: -160
        },
        {
            id: 2,
            text: 'Laptop',
            amount: 300
        },
        {
            id: 3,
            text: 'PayDay',
            amount: 2100
        },
        {
            id: 4,
            text: "60in LED Samsung TV",
            amount: 150
        }
]

}
// bringing to different files as components
export const GlobalContext = createContext(initialState);

// wraps components 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action calls to reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        });
    }
       
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}    {/*this children is components from App.js*/ }
    </GlobalContext.Provider>);
}