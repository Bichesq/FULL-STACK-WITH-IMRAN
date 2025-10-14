import { useState } from 'react'
import ListItem from './components/ListItem.jsx'
import EditListItem from './components/EditListItem.jsx';

import './App.css'

function App() {
  const [data, setData] = useState({
    todoItem: '',
    category: '',
    isEditing: false
  });
  const [dataList, setDataList] = useState([{todoItem: "wash my face", category: "morning chore", isEditing: false}, {todoItem: "wash my face", category: "morning chore", isEditing: false}])

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

  const handleDelete = (index) => {
    setDataList((prev) => prev.filter((_, i) =>i !== index))
  }

  const handleEdit = (index) => {
    const editItem = [...dataList]
    editItem[index] = {...editItem[index], isEditing: true}
  }

  const handleSave = (index) => {
    const editItem = [...dataList];
    editItem[index] = data;
    setDataList(editItem)
    setIsEditing(false)

  }

  const handleCancel = () => {
    setData({
      todoItem: "",
      category: ""
    });

    setIsEditing(false);
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

        {dataList.map((item, index) => (
          <li key={index}>
           {
            item.isEditing? 
            <EditListItem 
            isEditing={isEditing}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleChange={handleChange}
            /> :  
            <ListItem 
            item={item.todoItem} 
            category={item.category} 
            handleDelete={() => handleDelete(index)} 
            handleEdit={() => handleEdit(index)} 
          />     
          }
        </li>
        ))}
      </ul>
      
    </>
  )
}

export default App
