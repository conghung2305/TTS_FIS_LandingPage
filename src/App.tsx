
import { Outlet } from 'react-router-dom'
import './App.css'
import configAxios from './config/configAxios';
configAxios();
function App() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
