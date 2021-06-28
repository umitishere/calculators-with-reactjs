import { useState } from "react";

import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

const ToDoApp = (props) => {

    const [items, setItems] = useState(props.data);

    const addItem = (value) => {
        setItems([...items, value]);
    }

    return (
        <div>
            <h3>To Do App</h3>
            <AddItem handleSubmit={addItem} />
            <ToDoList data={items} />
        </div>
    );

}

export default ToDoApp;