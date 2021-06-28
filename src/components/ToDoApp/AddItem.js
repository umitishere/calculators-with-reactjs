import { useState } from "react";

const AddItem = (props) => {

    const [item, setItem] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        if (item !== '') {
            props.handleSubmit(item);
            setItem('');
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add new item"
                onChange={handleChange}
                value={item}
            />
            <button type="submit">Add</button>
        </form>
    );

}

export default AddItem;