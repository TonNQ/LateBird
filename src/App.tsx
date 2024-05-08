import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()
  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
