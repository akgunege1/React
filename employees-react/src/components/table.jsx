function Table({ calisanlar }) {
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll"></label>
                </span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {calisanlar.map((calisan, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" id={`checkbox${index}`} />
                </td>
                <td>{calisan.name}</td>
                <td>{calisan.mail}</td>
                <td>{calisan.adress}</td>
                <td>{calisan.phone}</td>
                <td>
                  <a href="#editEmployeeModal" className="edit">
                    <i className="material-icons">&#xE254;</i>
                  </a>
                  <a href="#deleteEmployeeModal" className="delete">
                    <i className="material-icons">&#xE872;</i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;
  