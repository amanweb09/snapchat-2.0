import React from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full h-screen bg-primary flex-center relative'>
            <img src='/images/logo.png' alt='logo' className='w-24' />

            <button
                onClick={() => { navigate('/login') }}
                className='w-full h-14 font-bold text-lg text-white bg-sky-500 absolute bottom-0 left-0'>
                LOG IN
            </button>
            <button
                onClick={() => { navigate('/signup') }}
                className='w-full h-14 font-bold text-lg text-white bg-rose-600 absolute bottom-14 left-0'>
                SIGNUP
            </button>

        </div>
    )
}

export default Splash