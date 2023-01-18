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
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clickedElement) => 
    {
setIsClicked({...initialState, [clickedElement] : true})            
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)