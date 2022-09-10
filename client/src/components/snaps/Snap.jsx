import React, { useState, useEffect } from 'react'
import { changeSnapStatus } from '../../api'

const Snap = ({ snapUrl, setShowSnap, receiverId }) => {

    const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5500"

    const [timer, setTimer] = useState(10)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            timer > 0 && setTimer(timer - 1)
        }, 1000);

        if (timer === 0) {
            setShowSnap(false)
        }

    }, [timer])

    useEffect(() => {

        async function changeSnapToOpened() {
            // console.log({ status: true, _id: snapUrl.snapId, receiverId });
            try {
                await changeSnapStatus({ status: true, _id: snapUrl.snapId, receiverId })
                setIsLoaded(true)
            } catch (error) {
                console.log(error);
                alert('snap could not be loaded :(')
            }
        }
        changeSnapToOpened()

    }, [])

    if(!isLoaded) {
        return (
            <div className="w-full h-screen bg-black"></div>
        )
    }
    return (
        <div
            style={{ zIndex: '999999' }}
            className="w-full h-screen fixed inset-0">

            <div className="w-full h-screen relative">
                <img
                    src={`${BASE_URL}${snapUrl.url}`}
                    alt="snap"
                    className='w-full h-screen' />

                <span
                    onClick={() => { setShowSnap(false) }}
                    className='absolute top-2 left-2 text-4xl font-bold text-white'>&times;</span>

                <div className="w-10 h-10 border-4 border-solid border-white text-white font-bold rounded-full flex-center absolute top-2 right-2">
                    {timer}
                </div>

            </div>

        </div>
    )
}

export default Snap