import React from 'react'
import { Header, Slider } from '../../components'

const home = () => {


    return (
        <div className='overflow-y-auto'>
            <div className='h-[70px] px-[59px] flex items-center'>
                <Header />
            </div>
            <Slider />
        </div>
    )
}

export default home