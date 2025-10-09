const ListItem = ({ item, category}) => {
    return (
        <>
            <div style={{display: flex, alignContent: "space-between"()}}><p>{item}</p> <p>category: {category}</p></div> <button>delete</button><button>update</button>
        </>
    )
}