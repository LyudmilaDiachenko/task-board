import React, {useState} from "react";

function AddTask({tasks, setTasks, columnToCreateTask, setColumnToCreateTask}) {
    const [task, setTask] = useState({})

    return (
        columnToCreateTask &&
        <div>
            <form className="add-task-form">
                <label className="add-task-lable">
                    <input
                        className="add-task-input"
                        type="text" 
                        placeholder="Title" 
                        value={task?.title || ''} 
                        onChange={e => setTask({...task, title: e.target.value})}
                    />
                </label>
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
                        <select className="add-task-select" onChange={e => setTask({...task, assignee: e.target.value})}>
                            <option disabled checked>Select assignee</option>
                            <option value="anna">Anna Smith</option>
                            <option value="john">John Doe</option>
                            <option value="emma">Emma Johnson</option>
                        </select>
                    </label>
                    <label>
                        <input className="add-task-date" type="date"  onChange={e => setTask({...task, deadline: e.target.value})} />
                    </label>
                </div>
                <button 
                    className="add-task-btn" 
                    type="button" 
                    onClick={_ => 
                        {
                            setTasks([...tasks, {...task, status: columnToCreateTask}]);
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