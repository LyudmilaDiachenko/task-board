import React, { useState } from "react";
import './App.css';
import Columns from "./js/columns";


function App() {
  const [columns, setColumns] = useState(
    ['Pending', 'In progress', 'Done']
  )

  return (
    <div className="App">
      <Columns {...{columns, setColumns}}/>
    </div>
  );
}

export default App;
