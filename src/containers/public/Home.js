import React, { useEffect } from 'react'
import { Header } from '../../components'
import * as api from '../../api'

const home = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchDataHome = async () => {
            const res = await api.getHome()
            console.log('data', res)
        }

        fetchDataHome()
    }, [])

    return (
        <div className='overflow-y-auto'>
            <div className='h-[70px] px-[59px] flex items-center'>
                <Header />
            </div>
        </div>
    )
}

export default home