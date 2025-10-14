import { useState } from "react";

const ListItem = ({ item, category, handleDelete, handleEdit }) => {

    
    
    return (
        <>
            <div style={{display: "flex", alignContent: "space-between"}}><p><span style={{marginRight: "3px", fontWeight: "bold"}}>Task:</span>{item}  </p> <p><span style={{marginLeft: "3px", marginRight: "3px", fontWeight: "bold" }}>category:</span>  {category}</p></div> <button onClick={handleDelete}>delete</button><button onClick={handleEdit}>update</button>
        </>
    )
}

export default ListItem;