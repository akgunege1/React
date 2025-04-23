import { AddModal } from "./addModal";
import { useState } from "react";

function Header() {
const[isAddModalOpen, setIsAddModalOpen]= useState(false);  

const openModal = () => setIsAddModalOpen(true)
const closeModal = () => setIsAddModalOpen(false)


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
            <button onClick={openModal} className="btn btn-success">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </button>
            <button onClick={closeModal} className="btn btn-danger">
              <i className="material-icons">&#xE15C;</i> <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
          <AddModal />
  )}
    </div>
  );
}

export default Header;
