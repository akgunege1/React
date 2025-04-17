import Header from "./components/header";
import { useState } from "react";
import Table from "./components/table";
import Footer from "./components/footer";


function App(){

    const [count,setCount]= useState(0);
   
    function HandleIncrement(){
        setCount(count+1);
    }

    function HandleDecrement(){
        setCount(count-1)
    }


    return(
       <div className="container">
            <div className="table-wrapper">
                <Header />
                <Table />
                <Footer />

            </div>
       </div>
    )
}

export default App;