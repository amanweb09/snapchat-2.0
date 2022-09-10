import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInfo } from '../../store/auth-slice'

const bitmojis = {
    1: 'bitmoji-1.png',
    2: 'bitmoji-2.png',
    3: 'bitmoji-3.png'
}

const Bitmoji = ({ next }) => {

    const [bitmoji, setBitmoji] = useState(1)

    const dispatch = useDispatch()

    function storeBitmoji() {
        if (!bitmoji) { return }
        dispatch(setInfo({
            field: 'bitmoji',
            value: bitmojis[bitmoji]
        }))
        next()
    }

    return (
        <div className='w-full h-screen flex-col flex-center'>
            <h1 className="font-semibold text-xl text-center mb-4">Choose a Bitmoji</h1>

            <div className='mt-6 grid grid-cols-2 gap-14'>
                <div
                    onClick={() => setBitmoji(1)}
                    className={`w-24 h-24 rounded-md shadow-md flex-center ${bitmoji === 1 ? "bg-primary" : "bg-white"}`}>
                    <img
                        src={`/images/${bitmojis[1]}`}
                        alt="bitmoji"
                        className='h-20' />
                </div>
                <div
                    onClick={() => setBitmoji(2)}
                    className={`w-24 h-24 rounded-md shadow-md flex-center ${bitmoji === 2 ? "bg-primary" : "bg-white"}`}>
                    <img
                        src={`/images/${bitmojis[2]}`}
                        alt="bitmoji"
                        className='h-20' />
                </div>
                <div
                    onClick={() => setBitmoji(3)}
                    className={`w-24 h-24 rounded-md shadow-md flex-center ${bitmoji === 3 ? "bg-primary" : "bg-white"}`}>
                    <img
                        src={`/images/${bitmojis[3]}`}
                        alt="bitmoji"
                        className='h-20' />
                </div>
            </div>

            <button
                onClick={storeBitmoji}
                className="w-48 rounded-full py-2 bg-purple-500 text-white block mx-auto mt-14 font-bold">Continue</button>

        </div>
    )
}

export default Bitmoji