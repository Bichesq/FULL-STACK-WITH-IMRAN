const ListItem = ({ item, category}) => {
    
    return (
        <>
            <div style={{display: "flex", alignContent: "space-between"}}><p>{item}  </p> <p>  category: {category}</p></div> <button onClick={handleDelete}>delete</button><button onClick={handleEdit}>update</button>
        </>
    )
}

export default ListItem;