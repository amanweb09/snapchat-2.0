import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../api'
import { setInfo } from '../../store/auth-slice'
import { setIsAuth } from '../../store/user-slice'

const Email = () => {

    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function storeEmailAndPassword() {
        if (!email || !password) { return }

        dispatch(setInfo({ field: 'email', value: email }))
        dispatch(setInfo({ field: 'password', value: password }))

        try {
            const { data } = await signup(userInfo)
            dispatch(setIsAuth(data))

        } catch (error) {
            alert(error.response.data.err || 'something went wrong!')
        }
    }

    return (
        <div className='flex-center w-full h-screen flex-col'>
            <h1 className="font-semibold text-xl text-center mb-4">Enter your Email and Password</h1>

            <div className="w-9/12 mt-6">
                <label htmlFor='email' className="text-sm font-bold uppercase text-gray-400">Email</label>
                <input
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email"
                    className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

                <label htmlFor='password' className="text-sm font-bold uppercase mt-4 text-gray-400 block">Password</label>
                <input
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

                <button onClick={storeEmailAndPassword} className="w-48 rounded-full py-2 bg-primary block mx-auto mt-14 font-bold">Signup</button>
            </div>
        </div>
    )
}

export default Email