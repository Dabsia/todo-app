import React from 'react';
import './inputTask.css'


const InputTask = ({task, showInput,showTask, inputValue}) => {

    // Map through the task array nd display the job that was typed by the user
    const job = task.map((work, id) => (
        <p key = {id} >{work}</p>
    ))

    return (
        <div className='holder'>
            <div className='row'>
                <input placeholder='Enter a task' onChange={showInput} value={inputValue}/>
                <button onClick={() => showTask()}>Enter a Task</button>
            </div>
            <div className='task'>
                {job}
            </div>
            
        </div>
        
    )
}

export default InputTask;