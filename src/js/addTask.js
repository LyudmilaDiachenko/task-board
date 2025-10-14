import React, {useState} from "react";
import { IoClose } from "react-icons/io5";

function AddTask({tasks, setTasks, columnToCreateTask, setColumnToCreateTask, users}) {
    const [task, setTask] = useState({})

    return (
        columnToCreateTask &&
        <div>
            <form className="add-task-form">
                <div className="close-box">
                    <div className="close-btn">
                        <IoClose onClick={_ => setColumnToCreateTask(false)}/>
                    </div>
                    <div>
                        <label className="add-task-lable">
                            <input
                                className="add-task-input"
                                type="text" 
                                placeholder="Title" 
                                value={task?.title || ''} 
                                onChange={e => setTask({...task, title: e.target.value})}
                                />
                        </label>
                    </div>
                </div>
                <label className="add-task-lable">
                    <textarea 
                        className="add-task-textarea"
                        placeholder="Description"
                        value={task?.description || ''}
                        onChange={e => setTask({...task, description: e.target.value})}
                    >
                    </textarea>
                </label>
                <div className="select-date-box">
                    <label>
                        <select required={true} className="add-task-select" onChange={e => setTask({...task, user: users[e.target.value]})}>
                            <option checked>Select assignee</option>
                            {users.map((user, i) => {
                                return <option key={'assignee-select-'+i} value={i}>{user.name}</option>
                            })}
                        </select>
                    </label>
                    <label>
                        <input className="add-task-date" type="date" onChange={e => setTask({...task, deadline: new Date(e.target.value).toISOString().slice(0, 10)})} />
                    </label>
                </div>
                <button 
                    className="add-task-btn" 
                    type="button" 
                    onClick={_ => 
                        {
                            setTasks([...tasks, {...task, deadline: task.deadline || new Date().toISOString().slice(0, 10), status: columnToCreateTask}]);
                            setTask({});
                            setColumnToCreateTask(false);
                        }
                    }
                >
                    Save Task
                </button>
            </form>
        </div> 
    )
}

export default AddTask;