import React, { useState } from "react";
import Columns from "./js/columns";
import AddTask from "./js/addTask";

function App() {
  const [tasks, setTasks] = useState([])
  const [columns, setColumns] = useState(
    ['Pending', 'In progress', 'Done']
  )

  return (
    <div className="App">
      <Columns {...{columns, setColumns}} />
      <AddTask  {...{tasks, setTasks}} />
    </div>
  );
}

export default App;
