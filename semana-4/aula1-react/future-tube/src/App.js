import React from 'react';
import logo from './logo.svg';
import './App.css';
import um from "./um.PNG";
import ft2 from "./media/ft2.PNG";
import ft3 from "./media/ft3.PNG";
import ft4 from "./media/ft4.PNG";
import ft5 from "./media/ft5.PNG";
import ft6 from "./media/ft6.PNG";
import ft7 from "./media/ft7.PNG";
import ft8 from "./media/ft8.PNG";


function App() {
  return (
    <div className="body">
      <header className="topo">
        <h1>FUTURETUBE</h1>
        <input type="text" placeholder="busca"></input>
      </header>

      <main>
        <aside>
        <nav>
            <ul>
            <li>Inicio</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
            <li>Biblioteca</li>
            <li>Histórico</li>
            </ul>
        </nav>
        </aside>
        <div className="videos">
            <div className="quadrados"><img src={um} /> <p>Titulo do video</p> </div>
            <div  className="quadrados"><img src={ft2}/> <p>Titulo do video</p></div> 
            <div  className="quadrados"><img src={ft3}/> <p>Titulo do video</p></div> 
            <div  className="quadrados"><img src={ft4}/> <p>Titulo do video</p></div>
            <div  className="quadrados"><img src={ft5}/> <p>Titulo do video</p></div>
            <div  className="quadrados"><img src={ft6}/> <p>Titulo do video</p></div>
            <div  className="quadrados"><img src={ft7}/> <p>Titulo do video</p></div>
            <div  className="quadrados"><img src={ft8}/> <p>Titulo do video</p></div>
         </div>
      </main>

      <footer>
       <h2> rodape </h2>
      </footer>
    </div>
  );
}

export default App;
