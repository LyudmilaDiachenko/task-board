import React, {useState} from "react";
import Task from "./task"

            
function Column({column, columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, setTaskToEdit, searchRequest, setSearchRequest, draggable, itemToDrag, setItemToDrag}) {
    const [isDrag, setIsDrag] = useState(false)
    const [isHover, setIsHover] = useState(false)

    function dragStart(eve){
        eve.dataTransfer.setData('text/plain', column)
        setItemToDrag('column')
        setIsDrag(true)
    }

    function dragEnd(){
        setItemToDrag(false)
        setIsDrag(false)
    }  

    function dragEnter(){
        if (itemToDrag === 'column') {
            setIsHover(true)
        }
    }
    function dragOver(eve){
        eve.preventDefault();
    }

    function dragLeave(){
        setIsHover(false)
    }

    function drop(eve){
        const columnToSort = eve.dataTransfer.getData('text/plain')
        console.log(columnToSort)
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
                    {filteredTasks.map((task, j) => 
                        <Task key={'task-'+j} {...{tasks, setTasks, task, setTaskToEdit, itemToDrag, setItemToDrag}} />
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
                onDragEnter={dragEnter}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={drop}
            ></div>
        </>
    )
}

export default Column;