import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'
const { BsArrowLeftShort, BsArrowRightShort } = icons

const Header = () => {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex items-center gap-6 w-full'>
                <div className='flex gap-4 text-gray-400'>
                    <span><BsArrowLeftShort size={24} /></span>
                    <span><BsArrowRightShort size={24} /></span>
                </div>
                <div className='w-1/2 focus-within:w-3/4 duration-500'><Search /></div>
            </div>
            <div>dang nhap</div>
        </div>
    )
}

export default Header