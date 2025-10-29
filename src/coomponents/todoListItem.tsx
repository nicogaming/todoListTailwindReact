
import { Trash2 } from "lucide-react";
import type { todo } from "../types/todo";
//checker om det er det rigtige item der skal have ændret completion status
interface TodoItemProps{
    todo: todo;
    onCompletedChange: (id:number,completed:boolean)=> void,
   onDelete: (id: number)=> void;
}
//generer selve listen af ting der skal gøres
export default function TodoListItem({todo,onCompletedChange,onDelete}: TodoItemProps) {
        return(
            <div className="flex items-center gap-1">
                <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
                    <input type="checkbox" checked={todo.completed} onChange={(e)=> onCompletedChange(todo.id, e.target.checked)} className="scale-125"/>
                    <span className={todo.completed ? "line-through text-gray-400":""}>{todo.title}</span>
                </label>
                
                <button onClick={()=> onDelete(todo.id) } className="p-1">
                    <Trash2 size={20} className="text-gray-500"/>
                </button>
            </div>
        );
}