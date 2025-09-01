import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Provider/TodoProvider";
import { v4 as uuidv4 } from "uuid";

export default function TodoInput() {
    const { todoDispatch, updateFlag, setUpdateFlag } = useContext(TodoContext);
    const [item, setItem] = useState("");

    useEffect(() => {
        setItem(updateFlag ? updateFlag.todoItem : "");
    }, [updateFlag]);
    const handleInputChange = (e) => {
        setItem(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (updateFlag) {
            todoDispatch({
                type: "update",
                id: updateFlag.id,
                todoItem: item,
            });
            setUpdateFlag(false);
        } else {
            todoDispatch({
                type: "add",
                id: uuidv4(),
                todoItem: item,
            });
        }
        setItem("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                className='mt-4 mb-2 ml-6 p-1 mr-3  border border-gray-800 rounded-sm'
                type="text" 
                placeholder="Add Data"
                value={item}
                onChange={handleInputChange}
            />
            <button type="submit" className="btn">
                {updateFlag ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}
