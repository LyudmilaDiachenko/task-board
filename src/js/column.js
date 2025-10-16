import React, {useState} from "react";

            
function Column({column, columns, setColumns, tasks, setColumnToCreateTask, users, setTaskToEdit, searchRequest, setSearchRequest, draggable}) {
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

    const filteredTasks = tasks
    .filter((t) => t.status === column)
    .filter(e => {
        return e?.title?.toLowerCase()?.includes(searchRequest?.toLowerCase()) ||
                e?.description?.toLowerCase()?.includes(searchRequest?.toLowerCase()) ||
                e?.user?.name?.toLowerCase()?.includes(searchRequest?.toLowerCase())
    })

    return (        
        <>
            <div 
                key={'column-'+column} 
                className={`column ${isDrag ? "dragged" : ""}`} 
                draggable={draggable} 
                onDragStart={dragStart}
                onDragEnd={dragEnd}
            >
                <div className="column-header">{column}</div>
                <ul className="column-body">
                    {filteredTasks.map((e, j) => 
                        <li className="task" 
                            key={'task-'+column+'-'+j} 
                            onClick={() => {
                                setTaskToEdit(e)
                            }}
                        >
                            <p className="task-description">{e.title}</p>                    
                            <p className="task-assignee">{e.status}</p>
                            <div className="task-box">
                                <p className="task-deadline">🕒 {e?.deadline?.slice(0, 10)}</p>
                                <img src={e?.user?.avatar} alt={e?.user?.name} title={e?.user?.name} className="task-image" />
                            </div>
                        </li>
                    )} 
                    <li className="task"
                        onClick={_ => 
                            setColumnToCreateTask(column)
                        }
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