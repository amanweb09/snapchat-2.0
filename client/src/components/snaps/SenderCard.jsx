import React from 'react'
import moment from 'moment'

const SenderCard = ({ rec, snap }) => {
    return (
        <div className='w-full px-4 py-2 flex items-center justify-evenly'>
            <img src='/images/bitmoji-3.png' alt="bitmoji" className="h-14" />

            <div className="flex-1">
                <span className={`font-bold text-lg block capitalize`}>{rec.receiver?.name}</span>
                <div className="flex">
                    {
                        rec.isOpened ?
                            <>
                                <img
                                    src="/images/opened.png"
                                    style={{ width: 18, height: 18 }} />
                                <span className="font-bold text-red-500 text-sm ml-2">Opened</span>
                                <span className="text-sm text-gray-300">3mins ago</span>
                            </>
                            :
                            <>
                                <img
                                    src="/images/sent.png"
                                    style={{ width: 18, height: 18 }} />
                                <span className="font-bold text-red-500 text-sm ml-2">Snap sent</span>
                                <span className="text-sm text-gray-300 ml-2">
                                    {moment(snap.updatedAt, 'YYYYMMDD').fromNow()}
                                </span>
                            </>
                    }

                </div>
            </div>

            <div className='bg-black/25 p-2 rounded-md'>
                <img src="/images/camera.png" alt="camera" className='h-6' />
            </div>
        </div>
    )
}

export default SenderCard