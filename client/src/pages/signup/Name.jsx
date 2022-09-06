import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../../store/auth-slice'

const Name = ({ next }) => {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function storeName() {
        if (!firstName || !lastName) { return }
        dispatch(setName({
            firstName,
            lastName
        }))
        next()
    }

    return (
        <div className='flex-center relative w-full h-screen flex-col'>
            <h1 className="font-semibold text-xl text-center mb-4">What's your name?</h1>

            <form action="#" method="post" className="w-9/12 mt-6">
                <label htmlFor='first-name' className="text-sm font-bold uppercase text-gray-400">first name</label>
                <input
                    name='firstName'
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}
                    type="text"
                    className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

                <label htmlFor='last-name' className=" mt-4 text-sm font-bold uppercase text-gray-400 block">last name</label>
                <input
                    name='lastName'
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                    type="name"
                    className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

                <p className="text-gray-400 text-xs font-bold mt-4">By clicking Sign Up, you agree to the
                    <span className="mt-6 text-xs font-semibold text-sky-500 text-center">Terms of Service</span>
                    and <span className="mt-6 text-xs font-semibold text-sky-500 text-center">Privacy Policy</span>
                </p>

                <button onClick={storeName} className="w-48 rounded-full py-2 bg-purple-500 text-white block mx-auto mt-14 font-bold">Sign Up</button>
            </form>
        </div>
    )
}

export default Name