import {
    createContext,
    useReducer,
    useEffect,
    useState,
} from "react";

export const TodoContext = createContext();

const defaultValue = JSON.parse(localStorage.getItem("todo")) || [];

const reducer = (todoItems, action) => {
    switch (action.type) {
        case "add":
            return [...todoItems, { id: action.id, todoItem: action.todoItem }];
        case "delete":
            return todoItems.filter((item) => item.id !== action.id);
        case "update":
            return todoItems.map((item) =>
                item.id === action.id
                    ? { ...item, todoItem: action.todoItem }
                    : item
            );
        default:
            return todoItems;
    }
};

const TodoProvider = ({ children }) => {
    const [todoData, todoDispatch] = useReducer(reducer, defaultValue);
    const [updateFlag, setUpdateFlag] = useState(false);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoData));
    }, [todoData]);

    return (
        <TodoContext.Provider value={{ todoData, todoDispatch, updateFlag, setUpdateFlag }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;