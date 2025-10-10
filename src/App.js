import React, { useState } from "react";
import Columns from "./js/columns";
import AddTask from "./js/addTask";

function App() {
  const [tasks, setTasks] = useState([])
  const [columnToCreateTask, setColumnToCreateTask] = useState(false);
  const [columns, setColumns] = useState(
    ['Pending', 'In progress', 'Done']
  )

  return (
    <div className="App">
      <Columns {...{columns, setColumns, tasks, setTasks, columnToCreateTask, setColumnToCreateTask}} />
      <AddTask  {...{tasks, setTasks, columnToCreateTask, setColumnToCreateTask}} />
    </div>
  );
}

export default App;
