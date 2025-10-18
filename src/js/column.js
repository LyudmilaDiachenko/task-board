import React, {useState, useRef} from "react";
import Task from "./task"

            
function Column({
    column, columns, setColumns, tasks, setTasks, setColumnToCreateTask, users, setTaskToEdit, 
    searchRequest, setSearchRequest, draggable, itemToDrag, setItemToDrag
}) {
    const [isDrag, setIsDrag] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const editableRef = useRef(null)


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
        
    function enableEditing() {
        setIsEditing(true)
        setTimeout(_=>{
            const el = editableRef.current
            el.focus()
                
            const range = document.createRange()
            range.selectNodeContents(el)
            range.collapse(false)
                
            const sel = window.getSelection()
            sel.removeAllRanges()
            sel.addRange(range)
        }, 10)
    }

    function checkInput(eve){
        if (eve.keyCode === 13){
            eve.target.blur()
        }
        if (eve.keyCode === 27){
            eve.target.innerText = column;
            eve.target.blur()
        }
    }   

    function changeColumnName(eve, oldColumnName){
        let newColumnName = eve.target.innerText.trim();
        if (newColumnName) {
            const newColumns = columns.map(c => c === oldColumnName ? newColumnName : c)
            setColumns(newColumns)
            setTasks(tasks.map(t => { 
                return {...t, status: t.status === oldColumnName ? newColumnName : t.status}; 
            }))
            setIsEditing(false)
        }
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
                <div className="column-header"
                    ref={editableRef}
                    contentEditable={isEditing}
                    suppressContentEditableWarning={true}
                    onClick={enableEditing}
                    onKeyDown={checkInput}
                    onBlur={e => changeColumnName(e, column)}
                >
                    {column}
                </div>
                <ul className="column-body">
                    {filteredTasks.map((task, j) => 
                        <Task key={'task-'+j} {...{tasks, setTasks, task, setTaskToEdit, itemToDrag, setItemToDrag}} />
                    )} 
                    <Task {...{tasks, setTasks, task: {status: column}, itemToDrag, setItemToDrag, setColumnToCreateTask}} />
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