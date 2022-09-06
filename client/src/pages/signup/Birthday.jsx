import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInfo } from '../../store/auth-slice'

const Birthday = ({ next }) => {

    const dispatch = useDispatch()

    const [birthday, setBirthday] = useState('')

    function storeBirthday() {
        if (!birthday) { return }
        dispatch(setInfo({
            field: 'birthday',
            value: birthday
        }))
        next()
    }

    return (
        <div className='flex-center w-full h-screen flex-col'>
            <h1 className="font-semibold text-xl text-center mb-4">When's your birthday?</h1>

            <form action="#" method="post" className="w-9/12 mt-6">
                <label htmlFor='birthday' className="text-sm font-bold uppercase text-gray-400">birthday</label>
                <input
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder='DD-MM-YYYY'
                    type="text"
                    className='h-8 w-full font-bold border-b-2 border-b-solid border-b-gray-400' />

                <button onClick={storeBirthday} className="w-48 rounded-full py-2 bg-purple-500 text-white block mx-auto mt-14 font-bold">Continue</button>
            </form>
        </div>
    )
}

export default Birthday