import type { todo } from "../types/todo";
import TodoListItem from "./todoListItem";

interface TodoListenProps{
    todos: todo[];
    onCompletedChange: (id:number,completed:boolean)=> void;
    onDelete: (id: number)=> void;
}

export default function TodoList({todos, onCompletedChange,onDelete}:TodoListenProps){
    const todosSorted = todos.sort((a,b)=>{
        if(a.completed === b.completed){
            return b.id - a.id
        }
        return a.completed ? 1: -1
    })
    return(
        <>
        <div className="space-y-2">
          {todosSorted.map(todo =>(
            <p key={todo.id} className="text-lg ">
              <TodoListItem todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete}/>
            </p>
          ))}        
          </div>
          {todos.length === 0 && (
            <p className="text-center text-sm text-gray-500">
              no tasks yet  
            </p>
          )}
          </>
    )
}