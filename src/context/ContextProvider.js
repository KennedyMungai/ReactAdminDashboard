import react, { createContext, useContext, useState } from 'react'


const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false
}

export const ContextProvider = ({ children }) => 
{
    return (
        <StateContext.Provider
            value={{ test: 'test' }}
        >
            {children}
        </StateContext.Provider>
    )
}