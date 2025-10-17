import React, {useState} from "react";

            
function Task({setTaskToEdit, task, tasks, setTasks, itemToDrag, setItemToDrag, setColumnToCreateTask}) {
    const [isDrag, setIsDrag] = useState(false)
    const [isHover, setIsHover] = useState(false)

    function dragStart(eve){
        eve.stopPropagation()
        setItemToDrag('task')
        eve.dataTransfer.setData('text/plain', tasks.indexOf(task))
        setIsDrag(true)
    }
    function dragEnd(){
        setItemToDrag(false)
        setIsDrag(false)
    }


    function dragEnter(){
        if (itemToDrag === 'task') {
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
        const taskToMoveIndex = eve.dataTransfer.getData('text/plain')
        const taskToMove = tasks[taskToMoveIndex];
        taskToMove.status = task.status;
        let newTasks = []

        tasks.forEach((t, i) => {
            if(!tasks.includes(task) && i === tasks.length - 1){
                newTasks.push(taskToMove)
            }
            if (t !== taskToMove){
                newTasks.push({...t})
            }
            if(t === task){
                newTasks.push({...taskToMove})
            }
        })
        setIsHover(false)
        setTasks([...newTasks])
    }


    return (
        <>
            <li className={`task ${isDrag ? "dragged" : ""}`}  
                draggable={true} 
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                onClick={() => {
                    setTaskToEdit ? setTaskToEdit(task) : setColumnToCreateTask(task.status)
                }}
            >
                {setTaskToEdit ? '' : 'Add new task'}
                {task?.title && <p className="task-description">{task?.title}</p>}
                {setTaskToEdit && <p className="task-assignee">{task?.status}</p>}
                {task?.deadline && <div className="task-box">
                    <p className="task-deadline">🕒 {task?.deadline?.slice(0, 10)}</p>
                    <img src={task?.user?.avatar} alt={task?.user?.name} title={task?.user?.name} className="task-image" />
                </div>}
            </li>
            <li className={`task-dropzone ${isHover ? "hover" : ""}`} 
                onDragEnter={dragEnter}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={drop}
            >
            </li>
        </>
    );
}

export default Task;