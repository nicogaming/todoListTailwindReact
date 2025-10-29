import { useState } from "react"
import TodoListItem from "./coomponents/todoListItem"
import { dummyData } from "./data/todo"
import AddTodoForm from "./coomponents/AddTodoForm"
import TodoList from "./coomponents/TodoList";

function App() {
const[todos, setTodos]= useState(dummyData);
//opdatere todolisten så man ved vad der er gjort
 function setTodoCompleted(id:number,completed:boolean){
  setTodos((prevTodos)=> prevTodos.map(todo =>(todo.id === id ? {...todo, completed}: todo)))
 }
 //tilføjer todos til listen
 function addTodo(title:string){
  setTodos(prevTodos => [
    {
      id: prevTodos.length + 1,
      title,
      completed: false,
    },
    ...prevTodos
  ])
 }
 function deleteTodo(id:number){
  setTodos(prevTodos => prevTodos.filter(todo=> todo.id !== id));
 }
 //laver selve frontend af hjemmesiden
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">
        your todos
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm
        onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />

      </div>
    </main>
  )
}

export default App
