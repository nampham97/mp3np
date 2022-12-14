import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight, Player } from '../../components'
const Publics = () => {
  return (
    <div className='w-full flex flex-col min-h-screen bg-main-100'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] flex-none'>
          <SidebarLeft></SidebarLeft>
        </div>
        <div className='flex-auto'>
          <Outlet />
        </div>
        <div className='w-[329px] flex-none'><SidebarRight></SidebarRight></div>
      </div>
      <div className='flex-none bg-main-200 h-[90px]'>
        <Player />
      </div>
    </div>
  )
}

export default Publics