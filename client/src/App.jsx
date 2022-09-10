import { useEffect, useState } from 'react';
import Splash from './pages/Splash';
import './styles/App.css';
import './styles/tailwind.css';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import Camera from './pages/Camera';
import { refresh } from './api';
import { setIsAuth } from './store/user-slice';
import Snaps from './pages/Snaps';
import Loader from './components/shared/Loader';

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function refreshUser() {
      try {
        const { data } = await refresh()
        dispatch(setIsAuth(data))
        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }

    refreshUser()
  }, [])

  if(loading) return <Loader />

  return (
    <Router>
      <Routes>

        <Route path='/' element={
          <OpenRoute>
            <Splash />
          </OpenRoute>
        } exact />

        <Route path='/signup' element={
          <OpenRoute>
            <Signup />
          </OpenRoute>
        } />

        <Route path='/login' element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />

        <Route path='/home' element={
          <AuthRoute>
            <Camera />
          </AuthRoute>
        } />

        <Route path='/snaps' element={
          <AuthRoute>
            <Snaps />
          </AuthRoute>
        } />

      </Routes>
    </Router>
  );
}

const OpenRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user)
  if (isAuth) {
    return <Navigate to={'/home'} />
  }

  return children
}

const AuthRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user)
  if (isAuth) {
    return children
  }

  return <Navigate to={'/'} />
}

export default App;
