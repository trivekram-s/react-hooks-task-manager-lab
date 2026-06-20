
import React, { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/tasks")
      .then(r=>r.json())
      .then(setTasks);
  },[]);

  function addTask(title){
    return fetch("http://localhost:3000/tasks",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({title,completed:false})
    }).then(r=>r.json()).then(newTask=>{
      setTasks(prev=>[...prev,newTask]);
    });
  }

  function toggleComplete(id){
    const task=tasks.find(t=>t.id===id);
    if(!task) return;
    fetch(`http://localhost:3000/tasks/${id}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({completed:!task.completed})
    }).then(r=>r.json()).then(updated=>{
      setTasks(prev=>prev.map(t=>t.id===id?updated:t));
    });
  }

  return <TaskContext.Provider value={{tasks,addTask,toggleComplete}}>{children}</TaskContext.Provider>;
}
