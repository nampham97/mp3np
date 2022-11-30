import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'
const Publics = () => {
  return (
    <div className='w-full flex overflow-y-auto'>
      <div className='w-[240px] flex-none border border-blue-500'>
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