import React, { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { TiEdit } from "react-icons/ti";

import "./Todocard.css";

function Todocard(props) {
  const [isUpdating, setUpdating] = useState(false);
  const [text, setText] = useState("");
  const [id,setID]=useState();
  const textareaRef = useRef(null);

  
    const updateTodo=async(req,res)=>{
      const response=await fetch(`http://localhost:3001/api/todo/${id}`,{
        method:"PUT",
        body:text,
      }
      )
      const data=await response.json();
    };
    const deleteTodo=async(req,res)=>{
      const response=await fetch(`http://localhost:3001/api/todo/${id}`,{
        method:"DELETE",
      });
      const data=await response.json();
    };

  function updatetext(id) {
    if (text.trim().length === 0) {
      setUpdating(false);
      setText(props.ele.Description);
      return;
    }
    setID(id);
    setText(text);
    updateTodo();
    setUpdating(false);
  }
  function deletetext(x) {
    setID(x);
    deleteTodo();
  }

  return (
    <div className="totalwrap">
      <div className="showtodo" id={props.ele.id}>
       
         {/* <p className="dateText">{props.ele.updatedAt.toDateString()}</p> */}
        {!isUpdating ? (
          <p className="cardtext">{props.ele.Description}</p>
        ) : (
          <textarea
            ref={textareaRef}
            value={text}
            autoFocus={true}
            maxLength={150}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )}

        <div className="icons">
          <RiCloseCircleLine
            className="delete-icon "
            onClick={() => {
              deletetext(props.ele._id);
            }}
          />
          {!isUpdating ? (
            <TiEdit
              className="delete-icon "
              onClick={() => {
                setText(props.ele.Description);
                setUpdating(true);
              }}
            />
          ) : (
            <DoneRoundedIcon
              className="delete-icon "
              onClick={() => {
                updatetext(props.ele._id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Todocard;
