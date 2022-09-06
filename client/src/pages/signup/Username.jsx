import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInfo } from '../../store/auth-slice'

const Username = ({ next }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')

    function storeUsername() {
        if (!username) { return }
        dispatch(setInfo({
            field: 'username',
            value: username
        }))
        next()
    }

    return (
        <div className='flex-center w-full h-screen flex-col'>
            <h1 className="font-semibold text-xl text-center mb-4">Pick a Username</h1>

            <form action="#" method="post" className="w-9/12 mt-6">
                <label htmlFor='username' className="text-sm font-bold uppercase text-gray-400">username</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className='h-8 w-full border-b-2 border-b-solid border-b-gray-400 font-bold' />

                <button onClick={storeUsername} className="w-48 rounded-full py-2 text-white bg-purple-500 block mx-auto mt-14 font-bold">Continue</button>
            </form>
        </div>
    )
}

export default Username