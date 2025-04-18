import { useState } from "react";

function Header() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  function OpenModal() {
    setIsAddModalOpen(true);
  }

  function closeModal() {
    setIsAddModalOpen(false);
  }

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
            <button onClick={OpenModal} className="btn btn-success">
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </button>
            <button onClick={closeModal} className="btn btn-danger">
              <i className="material-icons">&#xE15C;</i> <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal JSX burada */}
      {isAddModalOpen && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Employee</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Form veya içerik buraya gelecek.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

          export default Header;