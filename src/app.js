import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'


const App = () =>
{
    const activeMenu = true

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top ">
                            <button
                                type='button'
                                className='text-3xl p-3 hover: drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ backgroundColor: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div>
                            Sidebar
                        </div>
                    ) : (
                        <div className="">
                            width 0 sidebar
                        </div>
                    )}
                </div>
            </BrowserRouter >
        </div >
    )
}

export default App