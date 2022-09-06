import React from 'react'
import Topbar from '../shared/Topbar'
import WebCam from './WebCam'


const CaptureScreen = ({ cameraRef, clickSnap }) => {
    return (
        <div className='w-full h-screen overflow-hidden bg-black relative'>

            {/* topbar */}
            <Topbar isCamera={true} />
            : <></>

            {/* bottom tabs */}
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between py-2 h-16">

                <div className='w-40 flex items-center justify-evenly pr-6'>
                    <img src="/images/location.png" alt="location" className='h-6 mr-10' />
                    <img src="/images/chat.png" alt="chat" className='h-6' />
                </div>

                <div className='flex-1 flex-center'>
                    <div className='bg-primary rounded-full w-12 h-12 flex-center'>
                        <img src="/images/capture.png" alt="capture" className='h-6' />
                    </div>
                </div>

                <div className='w-40 flex items-center justify-evenly pl-6'>
                    <img src="/images/stories.png" alt="reel" className='h-6' />
                    <img src="/images/reel.png" alt="reel" className='h-6' />
                </div>
            </div>
            : <></>

            {/* Webcam */}
            <WebCam
                cameraRef={cameraRef}
                clickSnap={clickSnap} />

        </div>
    )
}

export default CaptureScreen