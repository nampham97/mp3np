import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'
const Publics = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[240px] flex-none'>
        <SidebarLeft></SidebarLeft>
      </div>
      <div className='flex-auto'>
        <Outlet />
      </div>
      <div className='w-[329px] flex-none'><SidebarRight></SidebarRight></div>
    </div>
  )
}

export default Publics