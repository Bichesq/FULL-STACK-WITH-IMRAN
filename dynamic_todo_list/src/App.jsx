import { useState } from 'react'

import './App.css'

function App() {
  const [todoItem, setTodoItem] = useState('');
  const [category, setCategory] = useState('');
  const 
  return(
    <>
      <h1>Dynamic To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name='todoItem' value={todoItem} onChange={handleChange} placeholder='Enter Todo Item' />
        <input type='text' name='category' value={category} onChange={handleChange} placeholder='Enter Category' />
      </form>
    </>
  )
}

export default App
