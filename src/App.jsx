import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

          <Route path='/' element={<Layout/>} >
            
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            

          </Route>

          

      </Routes>  
    </>
  )
}

export default App
