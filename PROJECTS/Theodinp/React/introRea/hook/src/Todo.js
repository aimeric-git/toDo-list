import React, {useState} from 'react'; 
import {v4 as uuid } from 'uuid'; 
import AddTodoForm from './AddTodoForm';

const Todo = () => {

    const [todos, setTodos] = useState([
        {id: 1, todos: 'acheter du lait'}, 
        {id: 2, todos: 'acheter du pain'}, 
        {id: 3, todos: 'ajouter du fromage'}
    ]);
    const [warning, setWarning] = useState(false); 

    const mytodos = todos.map((t) => {
        return (
            <li className="list-group-item" key={t.id}>{t.todos}</li>
        )
    })

    const addNewTodo = (newTodo) => {
        if(newTodo !== ''){
            
            warning && setWarning(false); 

            setTodos([...todos, {
                id: uuid(),
                todos: newTodo
            }])

        }else {
            setWarning(true); 
        }
    }
    const alertMessage = warning && (<div class="alert alert-danger">not null please!</div>) ; 

    return (
        <div>
            {alertMessage}
            <h1 role="alert" className="text-center text-muted"> {todos.length} To-do </h1>

            <ul className="list-group">
                {mytodos}
            </ul> 
            
            <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    )
}

export default Todo;