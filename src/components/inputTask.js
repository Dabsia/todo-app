import React from 'react';
import './inputTask.css'


const InputTask = ({task, showInput,showTask}) => {

    // Map through the task array nd display the job that was typed by the user
    const job = task.map(work => (
        <p>{work}</p>
    ))

    return (
        <div className='holder'>
            <div className='row'>
                <input placeholder='Enter a task'onChange={showInput}/>
                <button onClick={showTask}>Enter a Task</button>
            </div>
            <div className='task'>
                {job}
            </div>
            
        </div>
        
    )
}

export default InputTask;