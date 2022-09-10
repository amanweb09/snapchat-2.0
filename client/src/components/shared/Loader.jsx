import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-screen bg-black flex-center fixed inset-0'>
            <div className="p-2 flex-center">
                <div
                    className="loader w-14 h-14 border-2 border-solid border-x-white border-t-white border-b-transparent rounded-full absolute"></div>

                <div
                    className="loader w-10 h-10 border-2 border-solid border-x-white border-b-white border-t-transparent rounded-full absolute"></div>
            </div>
        </div>
    )
}

export default Loader