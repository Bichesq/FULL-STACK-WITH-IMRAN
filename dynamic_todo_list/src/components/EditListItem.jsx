const EditListItem = ({ isEditing, handleCancel, handleSave, handleChange }) => {
    return (
        <form onSubmit={handleSave}>
            <input type="text" name='todoItem' value={item.todoItem} onChange={handleChange} placeholder='Enter Todo Item' />
            <br/>
            <input type='text' name='category' value={item.category} onChange={handleChange} placeholder='Enter Category' />
            <br/>
            <br/>
            <div style={{display: "flex"}}>
                <button type='submit'>save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
      </form>
    );
}

export default EditListItem;