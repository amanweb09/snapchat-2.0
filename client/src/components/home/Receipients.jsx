import React from 'react'
import BestFriendCard from '../shared/BestFriendCard'

const Receipients = ({ setShowReceipientsScreen }) => {

    const bestFriends = [
        {
            _id: '1',
            name: 'eesh',
            bitmoji: '/images/bitmoji-1.png',
            streak: 10
        },
        {
            _id: '2',
            name: 'ansh',
            bitmoji: '/images/bitmoji-3.png',
            streak: 1789
        },
        {
            _id: '3',
            name: 'mridu',
            bitmoji: '/images/bitmoji-2.png',
            streak: 35
        },
        {
            _id: '4',
            name: 'guddu',
            bitmoji: '/images/bitmoji-1.png',
            streak: 250
        }
    ]

    return (
        <div className='px-2 bg-gray-50 min-h-screen'>

            <nav className='flex items-center mt-2'>
                <div className="w-8 flex-center">
                    <span
                        onClick={() => { setShowReceipientsScreen(false) }}
                        className='text-2xl font-bold'>&#8964;</span>
                </div>
                <div className='flex-1 bg-gray-100 flex-center rounded-full w-full'>
                    <img src="/images/search.svg" alt="search" className='w-6' />
                    <input
                        type="text"
                        placeholder='Send To ...'
                        className="px-4 py-2 bg-transparent text-white" />
                    <img src="/images/stories.png" alt="users" className='h-6' />
                </div>
            </nav>

            <div className="flex items-center justify-between mt-4">
                <div className="flex iteme-center">
                    <div className="w-28 bg-gray-100 text-gray-600 flex-center p-2 text-sm rounded-full font-bold">Nearby</div>
                    <div className="w-20 ml-2 flex-center p-2 bg-gray-100 rounded-full font-bold">
                        <img src="/images/streak.png" alt="streak" className='h-6' />
                    </div>
                </div>
                <div className="">
                    <div className="w-28 text-sm bg-gray-100 text-gray-600 flex-center p-2 rounded-full font-bold">Shortcuts</div>
                </div>
            </div>

            <div className="mt-6 shadow-md">
                <span className="text-sm font-bold">Stories</span>
                <div className="w-full rounded-md bg-white">
                    <div className='flex items-center py-2'>
                        <img src="/images/bitmoji-1.png" alt="bitmoji" className='h-10 m-2' />
                        <span className='font-semibold ml-4'>My Story</span>
                    </div>
                    <div className='flex-center py-2'>
                        <span className="font-bold">View More</span>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <span className="text-sm font-bold">Best Friends</span>
                <div className="w-full grid grid-cols-2 gap-4">
                    {
                        bestFriends.map((bestf) => {
                            return (
                                <BestFriendCard
                                    name={bestf.name}
                                    streak={bestf.streak}
                                    bitmoji={bestf.bitmoji}
                                    key={bestf._id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Receipients