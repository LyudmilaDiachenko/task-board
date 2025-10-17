import React, {useState} from "react";
import AddColumn from "./addColumn";
import Column from "./column";

function Columns({columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest}) {
    const [itemToDrag, setItemToDrag] = useState(false)
    return (
        <div className="columns">
            <Column key={'column-backlog'} column={"Backlog"} {...{columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest, itemToDrag, setItemToDrag}} />
            {columns.map(column => 
                <Column key={'column-'+column} {...{column, columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest, itemToDrag, setItemToDrag, draggable: true}} />
            )}   
            <div className="column">
                <div className="column-header">Add new column</div>
                <AddColumn {...{columns, setColumns}}/>
            </div>
        </div>
    )
}

export default Columns;