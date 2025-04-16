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
    <div className="title">
      <h1>Team Members</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod quae nihil officiis eius architecto sunt velit ipsa error ducimus.</p>
    </div>
  )
}

  function TeamMember() {             /* Proplara ayır */     /* Members kısmını propslarla oluştur. */ /* Members(x)  x kısmını proplarla doldur.  */
    return (                          /* const ile teammemberdatayı oluştur. Map fonksiyonunu çağır. */
                                      /* key eklemen gerekecek hatayı al sonra key ekle */
                                      /* Employee react'a başla.*/   /*Hatırlıyorsan eğer bi incrementation fonksiyonu yaz. */
      <div>
        <ul className="team">
          <li className="cofounder">
            <div className="myThumb"><img src="Img/Kardesim.png" alt="Canim Kardesim" /></div>
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
        <ul className="team">
          <TeamMember />
        </ul>
    );
  };


export default App;
