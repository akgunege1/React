

const calisanlar = [
    {   name: "Thomas Hardy",
        mail: "thomashardy@mail.com",
        adress: "89 Chiaroscuro Rd, Portland, USA",
        phone: "(171) 555-2222"
    },
    {
        name: "Dominique Perrier",
        mail: "dominiqueperrier@mail.com",
        adress: "Obere Str. 57, Berlin, Germany",
        phone: "(313) 555-5735"   
    },
    {
        name: "Maria Anders",
        mail: "mariaanders@mail.com",
        adress: "25, rue Lauriston, Paris, France",
        phone: "(503) 555-9931"   
    },
    {
        name: "Fran Wilson",
        mail: "franwilson@mail.com",
        adress: "C/ Araquil, 67, Madrid, Spain",
        phone: "(204) 619-5731"   
    },
    {
        name: "Martin Blank",
        mail: "martinblank@mail.com",
        adress: "Via Monte Bianco 34, Turin, Italy",
        phone: "(480) 631-2097"   
    }
]

function Table(){


    return(
        <div>
            <table className="table table-striped table-hover">
<thead>
    <tr>
        <th>
            <span className="custom-checkbox">
                <input type="checkbox" id="selectAll"/>
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
                                <a href="#editEmployeeModal" className="edit"><i className="material-icons">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" className="delete"><i className="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;