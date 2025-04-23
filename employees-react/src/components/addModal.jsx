import React from 'react'

export const AddModal = () => {
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
                        onClick={() => {}}
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
                            onChange={() => {}}
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
                            onChange={() => {}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea
                            className="form-control"
                            required
                            name="adress"
                            value={() => {}}
                            onChange={() => {}}
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
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {}}
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
  )
}
