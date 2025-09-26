import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount (oldValue => ++oldValue);
  }

  const handleDecrease =() => {
    setCount (oldValue => --oldValue)
  }

  return (
    <>
       <h1>Counter App</h1>
    <div className='container'>
        <button onClick={handleIncrease} id="increment" >+</button>
        <div id="counter">{count}</div>   
        <button onClick={handleDecrease} id="decrement" >-</button>
    </div>
    </>
  )
}

export default App
