
import React,{useRef,useState} from "react";
import TaskList from "./TaskList";
export default function SearchBar(){
 const searchRef=useRef();
 const [query,setQuery]=useState("");
 function handleSearch(){ setQuery(searchRef.current.value); }
 return <div><input ref={searchRef} placeholder="Search tasks..." value={query} onChange={handleSearch}/>
 <TaskList query={query}/></div>
}
