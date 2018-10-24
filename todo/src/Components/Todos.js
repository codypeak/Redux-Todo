import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <React.Fragment>
            <TodoForm />
            <TodoList />
        </React.Fragment>
    );
};
export default Todos;




//container component is just component that holds other components. 
//Todos will return todoForm and TodoList.  so import these.
//react can not render sibling elements.  so use fragment if dont want unnecessary divs. 
//then create todo form.