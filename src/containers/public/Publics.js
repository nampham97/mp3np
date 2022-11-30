import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from '../../components'
const Publics = () => {
  return (
    <div className='w-full flex'>
      <div className='w-[240px] flex-none border border-blue-500'>
        <SidebarLeft></SidebarLeft>
      </div>
      <div className=''>
        <Outlet />
      </div>
      <div className='w-[329px]'><SidebarRight></SidebarRight></div>
    </div>
  )
}

export default Publics