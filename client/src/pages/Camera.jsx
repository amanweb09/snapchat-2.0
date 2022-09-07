import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
// import { useState } from 'react'
import CaptureScreen from '../components/home/CaptureScreen'
import Snap from '../components/home/Snap'
import { clearRecepients, setSnap as setSnapInStore } from '../store/snap-slice'

const Camera = () => {

  const dispatch = useDispatch()

  const cameraRef = useRef(null)
  const [snap, setSnap] = useState('')

  function clickSnap() {
    const imgSrc = cameraRef.current.getScreenshot()
    setSnap(imgSrc)
  }

  function discardSnap() {
    dispatch(setSnapInStore({ snap: null }))
    dispatch(clearRecepients())
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
            discardSnap={discardSnap} />
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