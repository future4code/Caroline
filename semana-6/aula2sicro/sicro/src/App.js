import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Integracao} from './components/IntegracaoDasTelas.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <div>
          <Integracao/>
        </div>
      );
    }
  }


export default App;
 //<ListaDeUsuario/>