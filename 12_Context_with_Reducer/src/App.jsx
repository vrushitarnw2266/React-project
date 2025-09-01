import "./App.css";
import Todo from "./Components/Todo";
import TodoProvider from "./Provider/TodoProvider";

function App() {
    return (
        <TodoProvider>
            <Todo />
        </TodoProvider>
    );
}

export default App;