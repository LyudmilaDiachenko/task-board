import React, {useState} from "react";

            
function Task({setTaskToEdit, task, tasks, itemToDrag, setItemToDrag}) {
    const [isDrag, setIsDrag] = useState(false)
    const [isHover, setIsHover] = useState(false)

    function dragStart(eve){
        eve.stopPropagation()
        setItemToDrag('task')
        eve.dataTransfer.setData('text/plain', 'task-'+tasks.indexOf(task))
        setIsDrag(true)
    }
    function dragEnd(){
        setItemToDrag(false)
        setIsDrag(false)
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
            <li>

            </li>

        </>
    );
}

export default Task;