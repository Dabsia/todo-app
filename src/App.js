import React, {Component} from 'react';
import './App.css'
import InputTask from './components/inputTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: [],
      inputValue: ''
    }
  }

  render () {
    const {task, inputValue} = this.state;

    //  Take the input value and set the inputState state to the value of the input
    const showInput = (e) => {
      this.setState({inputValue: e.target.value})
    }

    // Store the value of the input state into the task array once the button is clicked
    const showTask = () => {
      if (inputValue.length > 0){
        task.push(inputValue)
        this.setState({inputValue: ''})
        
      } 
    }

    return (
      <div className='container'>
        <InputTask
         task = {task}
          showTask={showTask}
          showInput = {showInput} 
          inputValue = {inputValue}
          />
          
      </div>
    )
  }
    
}

export default App;
