import React from 'react'

const Snap = ({ snap, discardSnap }) => {
    return (
        <div className='w-full h-screen relative'>
            <div style={{ zIndex: '99' }} className="absolute left-0 top-0 w-full h-screen">
                <div className="w-full h-screen relative">
                    <span
                        onClick={discardSnap}
                        className='text-5xl text-white font-bold absolute left-2 top-2 cursor-pointer'>
                        &times;
                    </span>

                    <button
                        className="absolute bottom-2 right-2 w-32 p-2 rounded-full bg-primary font-bold">
                        Send snap
                    </button>
                </div>
            </div>

            <img src={snap} alt="snap" className="w-full h-screen" />
        </div>
    )
}

export default Snap