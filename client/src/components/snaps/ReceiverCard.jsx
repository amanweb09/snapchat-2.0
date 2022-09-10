import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const ReceiverCard = ({ openSnap, snap }) => {

    const [myRec, setMyRec] = useState({})

    const { user } = useSelector((state) => state.user)

    useEffect(() => {

        const userObj = snap.recepients.filter((rec) => { return rec.receiver._id === user._id })
        setMyRec(userObj[0])

    }, [])

    return (
        <div
            onClick={() => {
                if (myRec.isOpened === true) { return }
                openSnap(snap.snap, snap._id)
            }}
            className='w-full px-4 py-2 flex items-center justify-evenly'>

            <img
                src={snap.sender.bitmoji ? `/images/${snap.sender.bitmoji}`: '/images/bitmoji-3.png'}
                alt="bitmoji"
                className="h-14" />

            <div className="flex-1">
                <span className={`font-bold text-lg block capitalize`}>{snap.sender.name}</span>
                <div className="flex">
                    {
                        myRec.isOpened === true ?

                            <div
                                style={{ width: 18, height: 18 }}
                                className="border-2 border-solid border-red-500 rounded-md"></div>
                            :
                            <div
                                style={{ width: 18, height: 18 }}
                                className="bg-red-500 rounded-md"></div>
                    }
                    <span className="font-bold text-red-500 text-sm ml-2">New Snap</span>
                    <span className="text-sm text-gray-300 ml-2 inline-block">
                        {moment(snap.updatedAt).fromNow()}
                    </span>
                </div>
            </div>

            <div className='bg-black/25 p-2 rounded-md'>
                <img src="/images/camera.png" alt="camera" className='h-6' />
            </div>
        </div>
    )
}

export default ReceiverCard