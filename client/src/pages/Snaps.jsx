import React, { useEffect, useState } from 'react'
import { getAllSnaps } from '../api'
import BottomTabs from '../components/shared/BottomTabs'
import Topbar from '../components/shared/Topbar'
import { useSelector } from 'react-redux'
import Snap from '../components/snaps/Snap'

const Snaps = () => {

  const [snaps, setSnaps] = useState([])
  const [showSnap, setShowSnap] = useState(false)
  const [url, setUrl] = useState({
    snapId: "", url: ""
  })

  const { user } = useSelector((state) => state.user)

  useEffect(() => {

    async function fetchSnaps() {
      try {
        const { data } = await getAllSnaps()
        setSnaps(data.snaps)
        console.log(data.snaps);

      } catch (error) {
        console.log(error)
      }
    }

    fetchSnaps()

  }, [])

  function openSnap(snapUrl, snapId) {
    setUrl({ snapId, url: snapUrl })
    setShowSnap(true)
  }

  if (showSnap) {
    return <Snap snapUrl={url} setShowSnap={setShowSnap} receiverId={user._id} />
  }

  return (
    <div>
      <Topbar isCamera={false} />
      <div className='mt-20'>
        {
          snaps.map((snap) => {
            return (
              <div key={snap._id} className=''>
                {
                  user._id === snap.sender._id ?
                    snap.recepients.map((rec) => {

                      return (
                        <div className='w-full px-4 py-2 flex items-center justify-evenly'>
                          <img src='/images/bitmoji-3.png' alt="bitmoji" className="h-14" />

                          <div className="flex-1">
                            <span className={`font-bold text-lg block capitalize`}>{rec.receiver?.name}</span>
                            <div className="flex">
                              {
                                rec.isOpened ?
                                  <>
                                    <img
                                      src="/images/opened.png"
                                      style={{ width: 18, height: 18 }} />
                                    <span className="font-bold text-red-500 text-sm ml-2">Opened</span>
                                    <span className="text-sm text-gray-300">3mins ago</span>
                                  </>
                                  :
                                  <>
                                    <img
                                      src="/images/sent.png"
                                      style={{ width: 18, height: 18 }} />
                                    <span className="font-bold text-red-500 text-sm ml-2">Snap sent</span>
                                    <span className="text-sm text-gray-300">13h</span>
                                  </>
                              }

                            </div>
                          </div>

                          <div className='bg-black/25 p-2 rounded-md'>
                            <img src="/images/camera.png" alt="camera" className='h-6' />
                          </div>
                        </div>
                      )
                    })
                    :
                    <div
                      onClick={() => { openSnap(snap.snap, snap._id) }}
                      className='w-full px-4 py-2 flex items-center justify-evenly'>

                      <img
                        src='/images/bitmoji-3.png'
                        alt="bitmoji"
                        className="h-14" />

                      <div className="flex-1">
                        <span className={`font-bold text-lg block capitalize`}>{snap.sender.name}</span>
                        <div className="flex">
                          <div style={{ width: 18, height: 18 }} className="bg-red-500 rounded-md"></div>
                          <span className="font-bold text-red-500 text-sm ml-2">New Snap</span>
                          <span className="text-sm text-gray-300">13h</span>
                        </div>
                      </div>

                      <div className='bg-black/25 p-2 rounded-md'>
                        <img src="/images/camera.png" alt="camera" className='h-6' />
                      </div>
                    </div>
                }
              </div>
            )
          })
        }

      </div>
      <BottomTabs isCamera={false} />
    </div>

  )
}

export default Snaps