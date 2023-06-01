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

  
    const updateTodo=async(ID)=>{
      console.log("update",ID);
      const response=await fetch(`http://localhost:3001/api/todo/${ID}`,{
        method:"PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Description: text
        })
      }
      )
      const data=await response.json();
      props.setlists(data);
    };
    const deleteTodo=async(ID)=>{
      console.log("delete",ID) ;
      const response=await fetch(`http://localhost:3001/api/todo/${ID}`,{
        method:"DELETE",
      });
      const data=await response.json();
      props.setlists(data);
    };

  function updatetext(id) {
    if (text.trim().length === 0) {
      setUpdating(false);
      setText(props.ele.Description);
      return;
    }
    setID(id);
    setText(text);
    updateTodo(id);
    setUpdating(false);
  }
  function deletetext(id) {
    setID(id);    
    deleteTodo(id);
  }

  return (
    <div className="totalwrap">
      <div className="showtodo" id={props.ele.id}>
       
         <p className="dateText">{ props.ele.updatedAt. slice(0, 10)}</p>
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
