import React from 'react'
import icons from '../ultis/icons'

const { BsArrowLeftShort, BsArrowRightShort } = icons

const Header = () => {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex items-center'>
                <div className='flex'>
                    <BsArrowLeftShort /><BsArrowRightShort />
                </div>
                <div>timkiem</div>
            </div>
            <div>dang nhap</div>
        </div>
    )
}

export default Header