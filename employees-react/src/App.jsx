import Header from "./components/header";
import { useState } from "react";


function App(){

    const [count,setCount]= useState(0);
   
    function HandleIncrement(){
        setCount(count+1);
    }

    function HandleDecrement(){
        setCount(count-1)
    }


    return(
        <div>
            <Header />
            <div>
                <h2>Counter:{count}</h2>
                <button onClick={HandleIncrement}>Add Employee</button>
                <button onClick={HandleDecrement}>Remove Employee</button>
            </div>
        </div>
    )
}

export default App;