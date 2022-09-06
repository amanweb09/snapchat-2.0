import React, { useState } from 'react'
import { useRef } from 'react'
import Webcam from 'react-webcam'

const WebCam = ({ cameraRef, clickSnap }) => {

    return (
        <>
            <div
                style={{ height: 'calc(100vh - 4rem)' }}
                className="w-full rounded-br-lg rounded-bl-lg relative">
                <>
                    <Webcam
                        screenshotFormat='image/jpeg'
                        ref={cameraRef}
                        height={700}
                        width={400}
                        videoConstraints={{
                            facingMode: 'user',
                            height: 800,
                            width: 500
                        }} />
                    <div className="w-full absolute left-0 bottom-0 flex-center pb-4">

                        {/* capture btn */}
                        <div
                            onClick={clickSnap}
                            className="w-20 h-20 rounded-full border-4 border-solid border-white"></div>
                    </div>
                </>
            </div>
        </>
    )
}

export default WebCam