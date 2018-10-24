export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const completedTodo = id => {
    return {
        type: COMPLETED_TODO,
        payload: id
    }
}




//export ADD_TODO
//export const addTodo which takes in todo object and return type and payload of todo. 
//heavy logic happens on component Todos.

//we are going to call action addTodo from TodoForm.  so it will be imported there after adding Todos comp to App.

//completedtodo


//why is return {} here ? not ()?