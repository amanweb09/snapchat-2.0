import React, { useState, useRef } from 'react'
// import { useState } from 'react'
import CaptureScreen from '../components/home/CaptureScreen'
import Snap from '../components/home/Snap'

const Camera = () => {

  const cameraRef = useRef(null)
  const [snap, setSnap] = useState('')

  function clickSnap() {
    const imgSrc = cameraRef.current.getScreenshot()
    setSnap(imgSrc)
  }

  function discardSnap() {
    setSnap('')
  }

  return (
    <>
      {
        snap !== '' ?
          <Snap cameraRef={cameraRef}
            setSnap={setSnap}
            clickSnap={clickSnap}
            snap={snap} 
            discardSnap={discardSnap}/>
          :
          <CaptureScreen
            cameraRef={cameraRef}
            setSnap={setSnap}
            clickSnap={clickSnap} />
      }

    </>
  )
}

export default Camera