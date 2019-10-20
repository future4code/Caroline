import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CriaPlaylist} from './componentes/criaplaylist.js';
import {ListaPlayL} from './componentes/listaPlaylist';


function Integracao (props){
  if(props.cadastrado){
      return (<CriaPlaylist/>)
  }
      return (<ListaPlayL/>)
}


class App extends React.Component{
  constructor(props) {
    super(props);
    this.msgBotao = "Mostre todas minhas playlists!"
    this.state = {
      registros:false,
  };
}

  aoClicar =()=> {
    this.msgBotao = this.state.registros ? "Playlists" : "Volte";
    this.setState({registros: !this.state.registros})
    }
    
    render() {
      return (
        <div>
            <Integracao registros={!this.state.registros} />    
            <button onClick={this.aoClicar} >{this.msgBotao}</button>      
      </div>
    );
  }
}

export default App;

//<CriaPlaylist/>