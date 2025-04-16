/*import { useState } from 'react' */
function App() {
  return (
    <div>
      <Header />
      <Members />
    </div>
  )
}
function Header() {
  return (
    <div>
      <h1>Team Members</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod quae nihil officiis eius architecto sunt velit ipsa error ducimus.</p>
    </div>
  )
}

  function TeamMember() {
    return (
      <div>
        <ul className="team">
          <li className="cofounder">
            <div className="thumb"><img src="Img/Kardesim.png" alt="Canim Kardesim" /></div>
            <div className="description">
              <h3>Berat Ege Akgün</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cupiditate.</p>
            </div>
          </li>
        </ul>
      </div>
    );

  };

  function Members() {
    return (
        <div>
          <TeamMember />
        </div>
    );
  };


export default App;
