import { useState } from "react";

interface AddTodoForm{
    onSubmit:(title:string)=> void;
}
export default function AddTodoForm({onSubmit}: AddTodoForm){
    const[input,setInput]= useState("");
    //handler de nye tasks
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!input.trim()) return;
        onSubmit(input);
        setInput("");
    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder="What task do i have"
            className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >Add</button>
        </form>
    )
}