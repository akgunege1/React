 import React, { useState } from 'react'

export const AddModal = (addEmployee) => {

        
        const [isAddModalOpen, setIsAddModalOpen] = useState(false)

        const [formData, setFormData]= useState({
            name:'',
            mail:'',
            adress:'',
            phone:''    
            }
        )

        const closeModal = () => setIsAddModalOpen(false)

        function handleChange(event) {
            const { name, value } = event.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: value
            }));
          }

        function handleSubmit(e){
            e.preventDefault();
            addEmployee(formData);
            console.log('Form Gönderildi', formData);
            closeModal();
            setFormData({
                name:'',
                mail:'',
                adress:'',
                phone:''
            })
            }

            function handleCancel(){
                closeModal();
                setFormData({
                 name: "",
                 mail: "",
                 adress: "",
                 phone: ""
               });
            }
            {isAddModalOpen &&(


            )}
            return (
        <div className="modal fade show d-block" tabIndex="-1">
    <div className="modal-dialog">
        <div className="modal-content">
            <form onSubmit={() => {}}>
                <div className="modal-header">
                    <h5 className="modal-title">Add Employee</h5>
                    <button
                        type="button"
                        className="close"
                        onClick={handleCancel()}
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
                            value={() => {}}
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
                            value={() => {}}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            className="form-control"
                            required
                            name="adress"
                            value={() => {}}
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
                            value={() => {}}
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
                    <button type="submit" 
                            className="btn btn-primary"
                            onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
