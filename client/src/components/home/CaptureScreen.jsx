import React from 'react'
import Topbar from '../shared/Topbar'
import WebCam from './WebCam'
import BottomTabs from '../shared/BottomTabs'


const CaptureScreen = ({ cameraRef, clickSnap }) => {

    return (
        <div className='w-full h-screen overflow-hidden bg-black relative'>

            {/* topbar */}
            <Topbar isCamera={true} />
            : <></>

            {/* bottom tabs */}
            <BottomTabs isCamera={true}/>

            {/* Webcam */}
            <WebCam
                cameraRef={cameraRef}
                clickSnap={clickSnap} />

        </div>
    )
}

export default CaptureScreen