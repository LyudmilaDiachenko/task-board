import React, { useEffect } from 'react';

function CheckNewTask({columns, tasks, setTasks, users}) {
  let example = ['Setup project structure.', 'Create main page layout.', 'Add user login.', 'Add form validation.', 'Make layout responsive.', 'Test all features.', 'Optimize performance.', 'Write API docs.', 'Add error logging.', 'Add analytics.', 'Create color palette.', 'Design icons.', 'Draw illustrations.', 'Make social banner.', 'Redesign logo.', 'Brainstorm new ideas.', 'Update sprint plan.', 'Check deadlines.', 'Write progress report.', 'Team retrospective']

  useEffect(_ => {
    Array(10).fill().map(_=> getNewTask())
  }, [])

  function getNewTask(){
    Math.random() > 0.2 && tasks.push({
      user: users[Math.floor(Math.random()*users.length)],
      title: example[Math.floor(Math.random() * example.length)],
      description: example[Math.floor(Math.random() * example.length)],
      status: [...columns, 'Backlog'][Math.floor(Math.random() * (columns.length + 1))],
      deadline: new Date(new Date().setDate(new Date().getDate() + 3 + Math.random() * 30)).toISOString().slice(0, 10)
    })
    setTasks([...tasks])
  }

  return(
      <div className='refresh'>
          <button onClick={getNewTask} className='refresh-btn'>⟳</button>
          {/* <button onClick={getNewTask}>🔄</button> */}
          {/* <button onClick={getNewTask}>↻</button> */}
      </div>
  )
}
export default CheckNewTask;