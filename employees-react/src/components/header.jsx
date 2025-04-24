import { useState } from "react";
import AddModal from "./AddModal"

function Header({ onAddEmployee }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);  

    return (
        <div>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>
                            Manage<b>Employees</b>
                        </h2>
                    </div>
                    <div className="col-sm-6">
                        <button onClick={() => setIsAddModalOpen(true)} className="btn btn-success">
                            <i className="material-icons">&#xE147;</i>{" "}
                            <span>Add New Employee</span>
                        </button>
                        <button onClick={() => setIsAddModalOpen(false)} className="btn btn-danger">
                            <i className="material-icons">&#xE15C;</i> <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>

            {isAddModalOpen && (
                <AddModal 
                    onAddEmployee={onAddEmployee} 
                    setIsAddModalOpen={setIsAddModalOpen}
                />
            )}
        </div>
    );
}

export default Header;
