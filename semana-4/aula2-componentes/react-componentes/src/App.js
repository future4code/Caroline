import React from 'react';
import './App.css';
import {BigCard} from './componentes/BigCard/BigCard.js';
import {smallCard} from './componentes/smallCard/smallCard.js';
import { button } from "./componentes/Button/button.1";


const infos1 = {
  imagem: require('./componentes/img/img1.jpg'),
  texto: "Olá, sou a Carol, estudante da F4.",
  email: "carol@carol.br",
  endereço: "Jacacity",
  nome: "Caroline",
  iconeEmail: require('./componentes/img/email.svg'),
  iconeCasa: require('./componentes/img/house.svg'),
  iconeBotao: require('./componentes/img/expand.svg'),
  textoBotao: "Ver Mais"
}

function App() {
  return (
    <div className="App">
      <BigCard 
          nome={infos1.nome}
          imagem= {infos1.imagem}
          texto= {infos1.texto}
       />
        <smallCard
          email= {infos1.email}
          iconeEmail= {infos1.iconeEmail}
          end= {infos1.endereço}
          iconeCasa= {infos1.iconeCasa}
        />

        <button
          iconeBotao={infos1.iconeBotao}
          textoBotao={infos1.textoBotao}
        />
  
    </div>
  );
}

export default App;
