import React, { Component } from 'react';
import { addTodo } from '../Actions';
import { connect } from 'react-redux';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    handleTaskChange = e => {
        this.setState({ task: e.target.value });
    };

    submitTodo = () => {
        const {task} = this.state;
        const newTask = { task, completed: false, id: Date.now()};
        this.props.addTodo(newTask);
        this.setState({ task: '' })
    };

    render() {
        return (
            <div>
                <input onChange={this.handleTaskChange} placeholder="Enter Todo" value={this.state.task}/>
                <button onClick={this.submitTodo}>Add Todo</button>
            </div>
        )
    }
}
export default connect(null, {addTodo} )(TodoForm);

//this class component bc needs to hold on to state, ie the info in input field. 
//this is stateful component, but will also be wired up to redux. 
//start off with just creating div form in render.

//import addTodo from actions and connect after adding Todos component to App. 
//then add constructor and pass in props.  
//this.state takes in task that you set up in reducers.  empty string for adding in items in form.
//add handleTaskChange.  can use task or put name on input field. 
//add submitTodo takes that task and creates an object whose task is task.  create new task with key value pairs from reducers initial state.
    //{task} syntax bc this is the state object from constructor.
//then pass that new task up to this.props.addTodo(newTask) with newTask being its payload.
//then reset state. 
//finally onChange on input.  and value.
//onClick or onSubmit on button.

//now wire it up to redux.
//connect: can use null instead of mSTP bc dont need any other states. and the action addTodo.
//then wire up todoList.

//can keep local state even though using redux. 
