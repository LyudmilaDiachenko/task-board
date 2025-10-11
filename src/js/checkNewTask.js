import React from 'react';

function CheckNewTask({columns, tasks, setTasks}) {
  let assignees = ['Emily Brown', 'James Smith', 'Sophia Johnson', 'Daniel White', 'Emma Taylor', 'Michael Martin', 'Olivia Harris', 'David Anderson', 'John Brown', 'Sarah Jackson']
  let example = ['Setup project structure.', 'Create main page layout.', 'Add user login.', 'Add form validation.', 'Make layout responsive.', 'Test all features.', 'Optimize performance.', 'Write API docs.', 'Add error logging.', 'Add analytics.', 'Create color palette.', 'Design icons.', 'Draw illustrations.', 'Make social banner.', 'Redesign logo.', 'Brainstorm new ideas.', 'Update sprint plan.', 'Check deadlines.', 'Write progress report.', 'Team retrospective']

  function getNewTask(){
    Math.random() > 0.2 && tasks.push({
      assignee: assignees[Math.floor(Math.random() * assignees.length)],
      description: example[Math.floor(Math.random() * example.length)],
      status: [...columns, 'Backlog'][Math.floor(Math.random() * (columns.length + 1))],
      deadline: new Date(new Date().setDate(new Date().getDate() + 3 + Math.random() * 30)).toLocaleDateString() 
    })
    setTasks([...tasks])
  }

    console.log(tasks)

    return(
        <div className='refresh'>
            <button onClick={getNewTask}>⟳</button>
            {/* <button onClick={getNewTask}>🔄</button> */}
            {/* <button onClick={getNewTask}>↻</button> */}
        </div>
    )
}
export default CheckNewTask;