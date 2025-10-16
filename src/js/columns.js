import React from "react";
import AddColumn from "./addColumn";
import Column from "./column";

function Columns({columns, setColumns, tasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest}) {

    return (
        <div className="columns">
            <Column key={'column-backlog'} column={"Backlog"} {...{columns, setColumns, tasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest}} />
            {columns.map(column => 
                <Column key={'column-'+column} {...{column, columns, setColumns, tasks, setColumnToCreateTask, users, taskToEdit, setTaskToEdit, searchRequest, setSearchRequest, draggable: true}} />
            )}   
            <div className="column">
                <div className="column-header">Add new column</div>
                <AddColumn {...{columns, setColumns}}/>
            </div>
        </div>
    )
}

export default Columns;