import React from "react";
import AddColumn from "./addColumn";

function Columns({columns, setColumns, tasks, setTasks}) {


    return (
        <div className="columns">
            <div className="column">
                <div className="column-header">Backlog</div>
            </div>
            {columns.map((e, i) => 
                <div className="column" key={'column-'+i}>
                    <div className="column-header">{e}</div>
                    <ul className="column-body">
                        {tasks.map((e, j) => 
                           
                           
                           
                           <li className="task" key={'task-'+i+'-'+j}>
                                {e.title}
                            </li>



                        )}
                        <li className="task">
                            Add new task
                        </li>
                    </ul>
                </div>
            )}
            <div className="column" title="Add new column">
                <div className="column-header">
                    Add new column
                </div>
            <AddColumn {...{columns, setColumns}}/>
            </div>
        </div>
    )
}

export default Columns;