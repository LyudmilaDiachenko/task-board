import React from "react";

            
function Column({column, tasks, setColumnToCreateTask}) {
        
    return (
        <>
            <div className="column" key={'column-'+column} draggable={true}>
                <div className="column-header">{column}</div>
                <ul className="column-body">
                    {tasks
                    .filter((t) => t.status === column)
                    .map((e, j) => 
                        <li className="task" key={'task-'+column+'-'+j}>
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
            <div className="column-dropzone" onDrop={_=>_}></div>
        </>
    )
}

export default Column;