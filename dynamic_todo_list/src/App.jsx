import { useState } from 'react'
import ListItem from './components/ListItem.jsx'

import './App.css'

function App() {
  const [data, setData] = useState({
    todoItem: '',
    category: ''
  })
  const [dataList, setDataList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataList((prev) => [
       ...prev, data
    ])
    setData({
      todoItem: "",
      category: ""
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setData((prev) => (
      {...prev, [name]: value}
    ))
  }

  const handleDelete = () => {
    setDataList(dataList.filter())
  }

  return(
    <>
      <h1>Dynamic To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name='todoItem' value={data.todoItem} onChange={handleChange} placeholder='Enter Todo Item' />
        <br/>
        <input type='text' name='category' value={data.category} onChange={handleChange} placeholder='Enter Category' />
        <br/>
        <br/>
        <button type='submit' >Add Item</button>
      </form>
      <ul>
        {dataList.map((item, index) => <li key={index}><ListItem item={item.todoItem} category={item.category} /></li>) }
      </ul>
      
    </>
  )
}

export default App
