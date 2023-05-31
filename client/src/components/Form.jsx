import React, { useState } from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Form.css";
import fetch from "axios";

function Form({ setDisp, style }) {
  const [input, setInput] = useState(""); //initial value is empty

  const createTodo=async(req,res)=>{
    console.log("createTodo",input);
    const response=await fetch("http://localhost:3001/api/todo/",{
      method: "POST",
      headers: { "Content-Type": "application/json" ,"access-control-allow-origin":"*"},
      body: JSON.stringify({
        Description : input
      })
     });
    const data=await response.json();
    //  setTodos(data);
  };

  //STORE IN ARRAY AND ALSO DISPLAY THAT NEW ITEM
  const handleSubmit = (e) => {
    //to prevent it from refreshing
    e.preventDefault();
    if (input.trim() === "") {
      setDisp((dis) => !dis);
      return;
    }
    setInput(input);
    createTodo();
    setDisp((dis) => !dis);
    setInput("");
    
  };

  const handleChange = (e) => {
    //assign my input text to input
    setInput(e.target.value);
  };

  return (
    // create a form
    <>
      <form onSubmit={handleSubmit} style={style} className="frm">
        <input
          type="text"
          maxLength="200"
          placeholder="Add task"
          id="frm"
          className="todo-input"
          value={input}
          onChange={handleChange}
          name="input-todo"
          autoFocus={true}
        />

        {input.trim() === "" ? (
          <CloseRoundedIcon className="todo-btn-close" onClick={handleSubmit} />
        ) : (
          <DoneRoundedIcon className="todo-btn" onClick={handleSubmit} />
        )}
      </form>
    </>
  );
}

export default Form;
