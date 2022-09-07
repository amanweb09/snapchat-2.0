import React, { useState } from 'react'
import Receipients from './Receipients'
import { useDispatch } from 'react-redux'
import { setSnap } from '../../store/snap-slice'

const Snap = ({ snap, discardSnap }) => {

    const dispatch = useDispatch()

    const [showReceipientsScreen, setShowReceipientsScreen] = useState(false)

    function prepareSnap() {

        dispatch(setSnap({ snap }))
        setShowReceipientsScreen(true)
    }

    return (
        <>
            {
                showReceipientsScreen ?
                    <Receipients setShowReceipientsScreen={setShowReceipientsScreen} />
                    :
                    <div className='w-full h-screen relative'>
                        <div style={{ zIndex: '99' }} className="absolute left-0 top-0 w-full h-screen">
                            <div className="w-full h-screen relative">
                                <span
                                    onClick={discardSnap}
                                    className='text-5xl text-white font-bold absolute left-2 top-2 cursor-pointer'>
                                    &times;
                                </span>

                            <div className="absolute bottom-2 right-2 left-0 px-2 w-full flex items-center justify-between">
                                
                                <div>
                                    <div className="w-28 bg-black/50 rounded-full flex-center p-2">
                                        <img src="/images/save.png" alt="save" className='w-6' />
                                        <span className='ml-2 text-white'>save</span>
                                    </div>
                                </div>

                                <button
                                    onClick={prepareSnap}
                                    className=" w-32 text-sm p-2 rounded-full bg-primary font-bold flex-center">
                                        <span>Send snap</span>
                                        <img src="/images/send.png" alt="save" className='w-6 ml-2' />
                                </button>
                            </div>
                            </div>
                        </div>

                        <img
                            src={snap}
                            alt="snap"
                            className="w-full h-screen" />
                    </div>
            }
        </>
    )
}

export default Snap