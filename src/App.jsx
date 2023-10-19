import './App.css'
import AllRoutes from './router/AllRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <AllRoutes />
      <ToastContainer />
      {/* <Tenis /> */}
    </>
  )
}

export default App
