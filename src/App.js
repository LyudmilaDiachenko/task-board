import React, { useState } from "react";
import Header from "./js/header";
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
      <Header {...{columns, tasks, setTasks}}/>
      <Columns {...{columns, setColumns, tasks, setTasks, columnToCreateTask, setColumnToCreateTask}} />
      <AddTask  {...{tasks, setTasks, columnToCreateTask, setColumnToCreateTask}} />
    </div>
  );
}

export default App;
