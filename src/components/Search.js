import React from 'react'
import icons from '../ultis/icons'

const { BsSearch } = icons

const Search = () => {
    return (
        <div className='flex items-center w-full'>
            <span className='h-10 pl-4 flex bg-[rgba(0,0,0,0.05)] items-center justify-center rounded-l-[20px] text-gray-500'>
                <BsSearch size={20} />
            </span>
            <input type='text' placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát'
                className='outline-none bg-[rgba(0,0,0,0.05)] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-700 placeholder:text-gray-400'
            ></input>
        </div>
    )
}

export default Search