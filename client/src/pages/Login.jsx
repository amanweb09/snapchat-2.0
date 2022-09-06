import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex-center w-full h-screen flex-col'>
        <h1 className="font-semibold text-xl text-center mb-4">Log In</h1>

        <form action="#" method="post" className="w-9/12 mt-6">
            <label htmlFor='username' className="text-sm font-bold uppercase text-gray-400">username or email</label>
            <input type="text" className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

            <label htmlFor='password' className=" mt-4 text-sm font-bold uppercase text-gray-400 block">password</label>
            <input type="password" className='h-8 w-full border-b-2 border-b-solid border-b-gray-400' />

            <Link to={'/'} className="mt-6 text-xs font-semibold text-sky-500 text-center block">Forgot your password?</Link>

            <button className="w-48 rounded-full py-2 bg-primary block mx-auto mt-14 font-bold">Log In</button>
        </form>
    </div>
  )
}

export default Login