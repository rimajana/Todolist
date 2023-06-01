import React, { useState ,useEffect} from "react";
import "./Todopage.css";
import Todocard from "./Todocard";
function Todopage({todos,setTodos}) {
  return (
    <div className="twin">
      {console.log("todos",todos)}
      {todos.map((ele)=>{
        if(ele.Description.length !=0) 
        return (<Todocard ele={ele} listt={todos} setlists={setTodos}/>);
        
      })}
    </div>
  );
}

export default Todopage;
