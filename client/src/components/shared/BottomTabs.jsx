import React from 'react'
import { useNavigate } from 'react-router-dom'

const BottomTabs = ({ isCamera }) => {

    const navigate = useNavigate()

    return (
        <div className={`${isCamera ? "absolute" : "fixed bg-black/25"} bottom-0 left-0 w-full flex items-center justify-between py-2 h-16`}>

            <div className='w-40 flex items-center justify-evenly pr-6'>
                <img src="/images/location.png" alt="location" className='h-6 mr-10' />
                <img
                    onClick={() => { navigate('/snaps') }}
                    src="/images/chat.png"
                    alt="chat"
                    className='h-6' />
            </div>

            <div className='flex-1 flex-center'>
                {
                    isCamera ?
                        <div
                            onClick={() => navigate('/home')}
                            className='bg-primary rounded-full w-12 h-12 flex-center'>
                            <img src="/images/capture.png" alt="capture" className='h-6' />
                        </div>
                        :
                        <div
                            onClick={() => navigate('/home')}
                            className='w-12 h-12 flex-center'>
                            <img src="/images/camera.png" alt="camera" className='h-6' />
                        </div>
                }
            </div>

            <div className='w-40 flex items-center justify-evenly pl-6'>
                <img src="/images/stories.png" alt="reel" className='h-6' />
                <img src="/images/reel.png" alt="reel" className='h-6' />
            </div>
        </div>
    )
}

export default BottomTabs