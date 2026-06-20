
import React,{useContext} from "react";
import {TaskContext} from "../context/TaskContext";
export default function TaskList({query}){
 const {tasks,toggleComplete}=useContext(TaskContext);
 const filtered=tasks.filter(t=>t.title.toLowerCase().includes(query.toLowerCase()));
 return <ul>{filtered.map(task=><li key={task.id}>
 <span style={{textDecoration:task.completed?"line-through":"none"}}>{task.title}</span>
 <button data-testid={String(task.id)} onClick={()=>toggleComplete(task.id)}>{task.completed?"Undo":"Complete"}</button>
 </li>)}</ul>
}
