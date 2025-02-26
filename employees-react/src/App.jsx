import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

    function addEmployee(){
      setCount(count + 1);
    }
 
  return <div>
    <div className="Container">Manage <b>Employees</b><div><button onClick={addEmployee}>Add Employee</button></div>
    </div>
  </div>
}

export default App;
