import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyRouts} from './routers/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1 className='title'>🎬Peliculas</h1>
      </header>
      <MyRouts/>
    </div>
    
  )
}

export default App
