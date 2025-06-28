import { useDispatch, useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import ThemeToggler from './pages/ThemeToggler'
import MainRoutes from './routes/MainRoutes'
import { useEffect } from 'react'
import { asyncCurrentUser } from './store/actions/userActions'
import { asyncLoadProduct } from './store/actions/productActions'

function App() {
  let dispatch = useDispatch()
  let {users} = useSelector(state => state.UserReducer)

  useEffect(() => {
    !users && dispatch(asyncCurrentUser())
    dispatch(asyncLoadProduct())
  },[users])
  
  return (
    <div className="min-h-screen w-full bg-gray-300 dark:bg-neutral-900 dark:text-gray-200">
      <ThemeToggler />
      <NavBar />      
      <MainRoutes />
    </div>
  )
}

export default App