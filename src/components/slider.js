/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useSelector as UseSelector } from 'react-redux'

const slider = () => {

    const { banner } = UseSelector(state => state.app)
    console.log('banner', banner)
    return (
        <div className='flex gap-4 w-full px-[59px] pt-8 overflow-hidden'>
            {banner?.map((item, index) => {
                console.log(index)
                return <img key={item.encodeId}
                    src={item.banner}
                    alt=''
                    className={`slideShow flex-1 object-contain w-1/3 rounded-lg ${index < 3 ? 'block' : 'hidden'}`}
                />
            })}
        </div>
    )
}

export default slider 