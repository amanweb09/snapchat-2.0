import React from 'react'

const Topbar = ({ isCamera }) => {
    return (
        <nav style={{ zIndex: '99' }} className='flex justify-between absolute top-2 left-0 w-full px-2'>

            <div className="flex-center h-max">
                <img
                    src="/images/bitmoji-1.png"
                    alt="avatar"
                    className='w-8' />
                <div className="bg-black/25 flex-center rounded-full h-12 ml-4 w-12">
                    <img
                        src="/images/search.svg"
                        alt="search"
                        className='w-6' />
                </div>
            </div>

            {
                !isCamera && <div className='flex-1 flex-center'>
                    <span className="font-extrabold text-xl">Chat</span>
                </div>
            }

            <div className="flex">
                <div className="">
                    <div className="bg-black/25 flex-center rounded-full h-12 w-12">
                        <img
                            src="/images/add-friend.png"
                            alt="add"
                            className='w-6' />
                    </div>
                </div>

                <div className="ml-4">
                    {
                        isCamera ?
                            <div className="flex-center flex-col px-2 py-4 rounded-full bg-black/25">
                                <img
                                    src="/images/change-camera.png"
                                    alt="change camera"
                                    className='w-6' />
                                <img
                                    src="/images/flash.png"
                                    alt="flash"
                                    className='w-6 my-4' />
                                <img
                                    src="/images/camera.png"
                                    alt="camera"
                                    className='w-6' />
                            </div>
                            :
                            <div className="bg-black/25 flex-center rounded-full h-12 w-12">
                                <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                                <div style={{ margin: '0 3px' }} className="w-2 h-2 rounded-full bg-gray-100"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                            </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Topbar