import React from 'react'

const BestFriendCard = ({ name, streak, bitmoji }) => {
    return (
        <div className="bg-white flex-center rounded-md shadow-md p-2">
            <div className="flex">
                <div className="h-full flex-center">
                    <img src={bitmoji} alt="bitmoji" className='h-12' />
                </div>
                <div className="ml-2">
                    <span className='capitalize'>{name}</span>
                    <div className="flex-center">
                        <span>{streak}</span>
                        <img src="/images/streak.png" alt="streak" className='h-4' />
                        <img src="/images/best-friend.png" alt="streak" className='h-4' />
                    </div>
                </div>
            </div>
            <div className="ml-2">
                <div className='w-6 h-6 rounded-full border-2 border-solid border-gray-100'></div>
            </div>
        </div>
    )
}

export default BestFriendCard