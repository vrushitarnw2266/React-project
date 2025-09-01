import { useContext } from "react";
import { TodoContext } from "../Provider/TodoProvider";

export default function TodoOutput() {
    const { todoData, todoDispatch, setUpdateFlag } = useContext(TodoContext);
    return (
        <ul>
            {todoData.map((data) => (
                <li key={data.id}>
                    {data.todoItem}
                    <button  onClick={() => todoDispatch({ type: "delete", id: data.id })}>
                        Delete
                    </button>
                    <button onClick={() => setUpdateFlag({ id: data.id, todoItem: data.todoItem })}>
                        Update
                    </button>
                </li>
            ))}
        </ul>
    );
}