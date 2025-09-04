import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';



import './App.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)

  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item) => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo('');
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()

  }

  return (
    <>

      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-1/2'>
        <h1 className='font-bold text-center text-xl'> !Task Manage Your Todos At One Place</h1>
        <div className="addTodo">
          <h2 text-lg font-bold>Add a Todos</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className=' w-full rounded-xl' />

            <button onClick={handleAdd} disabled={todo.length === 0} className='bg-violet-800 hover:bg-violet-950 px-5 py-1 text-white rounded-md mx-4' ><IoMdAddCircleOutline /></button>
          </div>

        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} className='mt-8' /> Show Finished
        <h2 className='text-xl mt-5 font-bold text-center'>Your ToDo</h2>
        {todos.length === 0 && <div className='m-5 font-semibold'>No Todos To Display</div>}
        {todos.map(item => { })}

        <div className="todos">
          {todos.map(item => {



            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/4 my-3 justify-between" >
              <div className='flex gap-2 bg-white p-2'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />

                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons flex h-full">
                <button onClick={(e => { handleEdit(e, item.id) })} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-2 mr-1 '><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 mr-1 '><MdDeleteForever /></button>

              </div>
            </div>
          })}

        </div>


      </div>
    </>

  )
}

export default App;
