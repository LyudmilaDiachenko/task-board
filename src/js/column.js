import React, {useState} from "react";

            
function Column({column, columns, setColumns, tasks, setColumnToCreateTask}) {
    const [isDrag, setIsDrag] = useState(false)
    const [isHover, setIsHover] = useState(false)

    function dragStart(eve){
        eve.dataTransfer.setData('text/plain', column)
        setIsDrag(true)
    }    

    function dragEnd(){
        setIsDrag(false)
    }  

    function dragOver(eve){
        setIsHover(true)
        eve.preventDefault();
    }

    function dragLeave(){
        setIsHover(false)
    }

    function drop(eve){
        const columnToSort = eve.dataTransfer.getData('text/plain')
        let newColumns = []

        columns.forEach((c, i) => {
            if(i === 0 && column === 'Backlog'){
                newColumns.push(columnToSort)
            }
            if (c !== columnToSort){
                newColumns.push(c)
            }
            if(c === column){
                newColumns.push(columnToSort)
            }
        })

        setIsHover(false)
        setColumns([...newColumns])
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
                            <p className="task-description">{e.description}</p>
                            <p className="task-assignee">{e.assignee}</p>
                            <p className="task-deadline">🕒 {e.deadline}</p>
                        </li>
                    )}
                    <li className="task"
                        onClick={_ => setColumnToCreateTask(column)}
                    >
                        Add new task
                    </li>
                </ul>
            </div>
            <div 
                className={`column-dropzone ${isHover ? "hover" : ""}`} 
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={drop}
            ></div>
        </>
    )
}

export default Column;