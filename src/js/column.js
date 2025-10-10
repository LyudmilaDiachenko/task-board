import React, {useState} from "react";

            
function Column({column, tasks, setColumnToCreateTask}) {
    const [isDrag, setIsDrag] = useState(false)

    function dragStart(eve){
        eve.dataTransfer.setData('text/plain', column)
        setIsDrag(true)
    }    

    function dragEnd(eve){
        setIsDrag(false)
    }  

    return (
        <>
            <div 
                key={'column-'+column} 
                className={`column ${isDrag ? "dragged" : ""}`} 
                draggable={true} 
                onDragStart={dragStart}
                onDragEnd={dragEnd}
            >
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