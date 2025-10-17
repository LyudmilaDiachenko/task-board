import React, {useState} from "react";

            
function Task({setTaskToEdit, task, tasks, setTasks, itemToDrag, setItemToDrag}) {
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
            // if(i === 0){
            //     newTasks.push(taskToMove)
            // }
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
                    setTaskToEdit(task)
                }}
            >
                <p className="task-description">{task?.title}</p>                    
                <p className="task-assignee">{task?.status}</p>
                <div className="task-box">
                    <p className="task-deadline">🕒 {task?.deadlintask?.slice(0, 10)}</p>
                    <img src={task?.user?.avatar} alt={task?.user?.name} title={task?.user?.name} className="task-image" />
                </div>
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