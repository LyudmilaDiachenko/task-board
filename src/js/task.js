import React, {useState} from "react";

            
function Task({setTaskToEdit, task}) {

    return (
        <li className={`task ${0 ? "dragged" : ""}`}  
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
    );
}

export default Task;