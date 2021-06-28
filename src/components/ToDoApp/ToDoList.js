const ToDoList = (props) => {
    const itemArray = props.data;

    const listItems = itemArray.map((val, index) => {
        <li key={index}>{val}</li>
    });

    return (
        <ul>{listItems}</ul>
    );
}

export default ToDoList;