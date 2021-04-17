import React, {useState} from 'react'; 

const FunctionState = () => {

    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button onClick={() => setCounter((prev) => prev + 1)} className="btn btn-primary">
                     Counter + </button>
        </div>
    )
}
export default FunctionState;