import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState(' ')
  const [todoList, setTodoList] = useState([])

  const handleNewItem = (event) => {
    event.preventDefault();
    setNewItem(event.target.value);
  }

  const handleAddTask = () => {
    setTodoList(prev => [...prev, newItem]);
    setNewItem("");
    
  }

  const handleDelete = (index) => {
    setTodoList(prev => prev.filter((_, i) => i !== index))
    
  }

  return (
    <>
      <h1>To do List</h1>

      <input onChange={handleNewItem} value={newItem} type="text" placeholder='Enter Todo item' />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {todoList.map((item, index) => <li key={index}>{item} <button onClick={() => handleDelete(index)}>delete</button></li>)}
      </ul>
    </>
  )
}

export default App
