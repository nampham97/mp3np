import React from 'react'

const Player = () => {
    return (
        <div className='bg-main-200 px-5 h-full flex flex'>
            <div className='flex-auto w-[30%] border  border-red-500'>media</div>
            <div className='flex-auto w-[40%] border border-red-500'>player</div>
            <div className='flex-auto w-[30%] border border-red-500'>control</div>
        </div>
    )
}

export default Player