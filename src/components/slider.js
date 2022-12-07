import React from 'react'
import { useSelector as UseSelector } from 'react-redux'

const slider = () => {

    const { banner } = UseSelector(state => state.app)
    console.log('baner:', banner)
    return (
        <div>
            {banner?.map(item => {
                return <img key={item.encodeId}
                    src={item.banner}
                    className='flex-1 object-contain'
                    alt=''
                />
            })}
        </div>
    )
}

export default slider 