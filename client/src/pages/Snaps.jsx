import React, { useEffect, useState } from 'react'
import { getAllSnaps } from '../api'
import BottomTabs from '../components/shared/BottomTabs'
import Topbar from '../components/shared/Topbar'
import { useSelector } from 'react-redux'
import Snap from '../components/snaps/Snap'
import SenderCard from '../components/snaps/SenderCard'
import ReceiverCard from '../components/snaps/ReceiverCard'

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
                      return <SenderCard rec={rec} />
                    })

                    :
                    /* {recepients: [
                      {receiver: {_id, name, username...}, isOpened: true },
                      {receiver: {_id, name, username...}, isOpened: true },
                    ]} */
                    <ReceiverCard
                      openSnap={openSnap}
                      snap={snap} />
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