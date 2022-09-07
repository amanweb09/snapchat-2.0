import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setRecepients } from '../../store/snap-slice'

const BestFriendCard = ({ friend }) => {

    const dispatch = useDispatch()

    const [isRecepient, setIsRecepient] = useState(false)

    function dispatchRecepient(fr) {
        dispatch(setRecepients(fr))
        setIsRecepient(true)
    }

    return (
        <div
            onClick={() => { dispatchRecepient(friend) }}
            className="bg-white flex-center rounded-md shadow-md p-2">
            <div className="flex">
                <div className="h-full flex-center">
                    <img src={friend.bitmoji} alt="bitmoji" className='h-12' />
                </div>
                <div className="ml-2">
                    <span className='capitalize'>{friend.name}</span>
                    <div className="flex-center">
                        <span>{friend.streak}</span>
                        <img src="/images/streak.png" alt="streak" className='h-4' />
                        <img src="/images/best-friend.png" alt="streak" className='h-4' />
                    </div>
                </div>
            </div>
            <div className="ml-2">
                <div className={`w-6 h-6 rounded-full flex-center border-2 border-solid border-gray-100 ${isRecepient ? "bg-sky-500" : "bg-white"}`}>
                    {
                        isRecepient && <span className='font-bold text-white'>&#10003;</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default BestFriendCard