import "./styles.css";
// import Todopage from "./pages/components/Todopage";

import Form from "./components/Form";
import Todopage from "./components/Todopage";
import { useEffect, useState } from "react";
import { GrAddCircle } from "react-icons/gr";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // leda add cheyna dependency

export default function App() {
  const [lists, setLists] = useState([]);
  const [disp, setDisp] = useState(true);
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
  }, [setTodos])

  function fun() {
    setDisp(!disp);
  }
  // useEffect(() => {
  //   console.log("use effect in app js ran");
  // }, [lists]);
  return (
    <div className="App">
      <div className="header">
        <h1>TODO LIST</h1>
      </div>

      <Todopage todos={todos} setTodos={setTodos} />

      <div className="todo-footer">
        <GrAddCircle
          onClick={fun}
          className="circle"
          style={{
            display: disp ? null : "none"
          }}
        />
        <Form
          setTodos={setTodos}
           setDisp={setDisp}
          style={{ display: !disp ? null : "none" }}
        />
      </div>
    </div>
  );
}
