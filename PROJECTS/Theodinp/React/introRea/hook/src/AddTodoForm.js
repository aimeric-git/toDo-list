import React, {useState} from 'react'; 

const AddTodoForm = ({addNewTodo}) => {

    const [addTodo, setAddTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addNewTodo(addTodo); 
        
        setAddTodo(''); 
    }
    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="card card-body">
            <div className="form-group">
                <label>Add Todo</label>
                <input 
                    type="text" 
                    className="form-control mt-4" 
                    value={addTodo}
                    onChange={(e) => setAddTodo(e.target.value )}   />
                <input type="submit" className="btn btn-light" value="add" />

            </div>

            </div>
        </form>

    )
}
export default AddTodoForm; 