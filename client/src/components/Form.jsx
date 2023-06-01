import React, { useState } from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Form.css";

function Form({ setTodos,setDisp, style }) {
  const [input, setInput] = useState(""); //initial value is empty

  const createTodo=async(req,res)=>{
    console.log("createTodo",input);
    const response = await fetch("http://localhost:3001/api/todo/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Description: input
      })
    });
    const data = await response.json();
    setTodos(data);

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

/*
 _header: null,
    _keepAliveTimeout: 5000,
    _onPendingData: [Function: bound updateOutgoingData],
    req: [Circular *2],
    _sent100: false,
    _expect_continue: false,
    locals: [Object: null prototype] {},
    [Symbol(kCapture)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      'x-powered-by': [Array],
      'access-control-allow-origin': [Array]
    }
  },
  body: { Description: 'adding from backend' },
  _body: true,
  length: undefined,
  route: Route { path: '/', stack: [ [Layer] ], methods: { post: true } },
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    'content-length': '41',
    'accept-encoding': 'gzip, deflate, br',

    'user-agent': 'Thunder Client (https://www.thunderclient.com)',
    'content-type': 'application/json',
    host: 'localhost:3001',
    connection: 'close'
  },
  [Symbol(kHeadersCount)]: 14,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0,
  [Symbol(RequestTimeout)]: undefined
}
 */