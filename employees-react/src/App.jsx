import Header from "./components/header";
import { useState } from "react";
import Table from "./components/table";
import Footer from "./components/footer";


function App() {
    const [calisanlar, setCalisanlar] = useState([
      {
        name: "Thomas Hardy",
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
        name: "Martin Blank",
        mail: "martinblank@mail.com",
        adress: "Via Monte Bianco 34, Turin, Italy",
        phone: "(480) 631-2097"
      }
    ]);
  
    const addEmployee = (newEmployee) => {
      setCalisanlar((prev) => [...prev, newEmployee]);
    };
  
    return (
      <div>
        <Header onAddEmployee={addEmployee} />
        <Table calisanlar={calisanlar} />
        <Footer />
      </div>
    );
  }
  
  export default App;