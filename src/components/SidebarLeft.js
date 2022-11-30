import React from 'react'
import logo from '../assets/logo-light.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'


const SidebarLeft = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
                <img src={logo} alt='logo' className='w-[120px] h-10' />
            </div>
            <div className='flex flex-col'>
                {sidebarMenu.map(item => {
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className='py-2 px-[25px] font-bold flex'>
                            {item.icons}
                            <span>{item.text}</span>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default SidebarLeft