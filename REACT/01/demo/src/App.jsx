import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/01/card'
import Sample from './components/01/Sample'
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <h1 className="bg-green-300 p-3 text-center text-xl">Hallo</h1>
      <Sample />
    </>
  )
}
export default App