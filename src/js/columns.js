import React from "react";
import AddColumn from "./addColumn";

function Columns({columns, setColumns, tasks, columnToCreateTask, setColumnToCreateTask}) {

    return (
        <div className="columns">
            <div className="column">
                <div className="column-header">Backlog</div>
                <ul className="column-body">
                    {tasks
                        .filter((t) => !columns.includes(t.status))
                        .map((e, j) => 
                            <li className="task" key={'task-'+0+'-'+j}>
                                <p>{e.title}</p>
                                <p>{e.description}</p>
                                <p>{e.assignee}</p>
                                <p>{e.deadline}</p>
                            </li>
                        )
                    }
                    <li className="task"
                            onClick={_ => setColumnToCreateTask('backlog')}
                    >
                            Add new task
                    </li>
                </ul>
            </div>
            
            {columns.map((column, i) => 
                <div className="column" key={'column-'+i}>
                    <div className="column-header">{column}</div>
                    <ul className="column-body">
                        {tasks
                        .filter((t) => t.status === column)
                        .map((e, j) => 
                           <li className="task" key={'task-'+i+'-'+j}>
                                <p>{e.title}</p>
                                <p>{e.description}</p>
                                <p>{e.assignee}</p>
                                <p>{e.deadline}</p>
                            </li>
                        )}
                        <li className="task"
                            onClick={_ => setColumnToCreateTask(column)}
                        >
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