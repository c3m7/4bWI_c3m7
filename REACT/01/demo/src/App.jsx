import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample4 from './components/03/Sample4'

 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Sample4 />
    </>
  )
}
export default App