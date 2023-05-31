import React, { useState ,useEffect} from "react";
import "./Todopage.css";
import Todocard from "./Todocard";
function Todopage(props) {
  const[todos,setTodos]=useState([]);
  const getTodo=async(req,res)=>{
    const response=await fetch("http://localhost:3001/api/todo/",{
      method:"GET",
     }
    )
    const data= await response.json();
    // console.log("todopage",data);
     setTodos(data);
  };
  
  useEffect(() => {
    getTodo();
  }, [])
  


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
