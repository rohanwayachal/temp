import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [obj, setObj] = useState([
    { name: "rohan", id: 1 },
    { name: "sumeet", id: 2 }
  ]);

  let onDataChange = (id, val) => {
    let temp = [...obj];
    temp.forEach(data => {
      if (data.id == id) {
        data.name = val;
      }
    });
    setObj(temp);
  };

  return (
    <div>
      {obj.map(data => (
        <Row key={data.id} data={data} onch={onDataChange} />
      ))}
    </div>
  );
}

function Row(props) {
  const [edit, setEdit] = useState(true);

  let changeedit = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <li>
        <input
          type="text"
          value={props.data.name}
          onChange={e => props.onch(props.data.id, e.target.value)}
          disabled={edit}
        />
        <input type="button" value="edit" onClick={changeedit} />
      </li>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
