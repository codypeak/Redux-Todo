import React from 'react';
import { connect } from 'react-redux';
import { completedTodo } from '../Actions';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => (
            <div 
                style={todo.completed ? {textDecoration: 'line-through'} : null} 
                onClick={() => props.completedTodo(todo.id)} 
                key={todo.id}
            >
                {todo.task}
            </div>))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        todos: state,
    }
}

export default connect(mapStateToProps, { completedTodo })(TodoList);

//lastly create todo list which will map over todo items that we pull off of state. 

//then import connect. 
// const mapStateToProps

//ok very lastly map
    //wouldnt you want to do this much earlier? 

//remember connect connects your app to your store.  mstp will connect you to your data. 

//import completedtodo.
//add onClick
