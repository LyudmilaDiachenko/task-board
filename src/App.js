import React, { useState } from "react";
import Header from "./js/header";
import Columns from "./js/columns";
import AddTask from "./js/addTask";
import Search from "./js/search";

let exampleNames = ['Emily Brown', 'James Smith', 'Sophia Johnson', 'Daniel White', 'Emma Taylor', 'Michael Martin', 'Olivia Harris', 'David Anderson', 'John Brown', 'Sarah Jackson']


function App() {
  const [searchRequest, setSearchRequest] = useState('')
  const [users, _] = useState(
    new Array(10 + Math.round(Math.random()*(exampleNames.length - 10)))
    .fill().map(_ => {
      const name = exampleNames.pop() 
      return {
        name: name,
        avatar: "https://api.dicebear.com/9.x/personas/svg?seed="+name
      }
    })
  )
  const [tasks, setTasks] = useState([])
  const [taskToEdit, setTaskToEdit] = useState(null)
  const [columnToCreateTask, setColumnToCreateTask] = useState(false);
  const [columns, setColumns] = useState(
    ['Pending', 'In progress', 'Done']
  )

  return (
    <div className="App">
      <div>
        <Search {...{searchRequest, setSearchRequest}}/>
      </div>
      <Header {...{columns, tasks, setTasks, users}}/>
      <Columns {...{columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest}} />
      <AddTask  {...{tasks, setTasks, columnToCreateTask, setColumnToCreateTask, users, taskToEdit, setTaskToEdit}} />
    </div>
  );
}

export default App;
