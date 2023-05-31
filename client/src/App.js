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

      {/* <Todopage lists={lists} setlist={setLists} /> */}
      <Todopage />
      {/* <FontAwesomeIcon icon={faCoffee} /> */}

      <div className="todo-footer">
        <GrAddCircle
          onClick={fun}
          className="circle"
          style={{
            display: disp ? null : "none"
          }}
        />
        <Form
          // setList={setLists}
          setDisp={setDisp}
          style={{ display: !disp ? null : "none" }}
        />
      </div>
    </div>
  );
}
