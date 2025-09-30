import { useState } from 'react'
import './App.css'

function App() {
  const play = ["Rock", "Paper", "Scissors"]
  const [option, setOption] = useState('Scissors')

  const aiQuessHandle = () => {
    const quess = Math.floor(Math.random() * play.length)
    setOption(play[quess])
  }

  return (
    <>
      <h1>Random AI</h1>
      <button onClick={aiQuessHandle}>Play</button>
      <h3>AI Output: {option}</h3>
    </>
  )
}

export default App
