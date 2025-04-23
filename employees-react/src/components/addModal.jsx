import { useState } from "react";

function AddModal(onAddEmployee) {

    const [isAddModalOpen, setIsAddModalOpen]= useState(false);
    const [formData, setFormData]= useState({
            name:'',
            mail:'',
            adress:'',
            phone:''
    }
)

    function OpenAddModal() {
        setIsAddModalOpen(true);
      }
    
      function closeAddModal() {
        setIsAddModalOpen(false);
      }
    
      function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    
    
      function handleCancel(){
       closeAddModal();
       setFormData({
        name: "",
        mail: "",
        adress: "",
        phone: ""
      });
        
      }
      function handleSubmit(e) {
        e.preventDefault();
        onAddEmployee(formData);
        console.log("Form gönderildi:", formData);
        closeAddModal();
        setFormData({
          name: "",
          mail: "",
          adress: "",
          phone: ""
        });
      }
    if(isAddModalOpen!=true) return null;
    
    return (

        

        <div>
            {isAddModalOpen && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Employee</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={handleCancel}
                                    >
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            required
                                            name="mail"
                                            value={formData.mail}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea
                                            className="form-control"
                                            required
                                            name="adress"
                                            value={formData.adress}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCancel}
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AddModal;