import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notifications, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent
        content={title}
        position="BottomCenter"
    >
        <button type='button'>

        </button>
    </TooltipComponent>
)

const Navbar = () =>
{
    const { activeMenu, setActiveMenu } = useStateContext()

    return (
        <div className='flex justify-between p-2 md: mx-6 relative'>
            <NavButton
                title="Menu"
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                color="blue"
                icon={<AiOutlineMenu />}
            />
        </div>
    )
}

export default Navbar