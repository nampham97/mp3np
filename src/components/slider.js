import React from 'react'
import { useSelector as UseSelector } from 'react-redux'

const slider = () => {

    const { banner } = UseSelector(state => state.app)
    console.log('baner:', banner)

    for (let i = 0; i < banner.length; i++) {

    }

    return (
        <div className='flex gap-4 w-full px-[59px] pt-8 overflow-hidden'>
            {banner?.map(item => {
                return <img key={item.encodeId}
                    src={item.banner}
                    alt=''
                    className='flex-1 object-contain w-1/3 rounded-lg'
                />
            })}
        </div>
    )
}

export default slider 