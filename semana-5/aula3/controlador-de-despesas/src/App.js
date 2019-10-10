import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { TelaDeCadastro } from './TelaDeCadastro/telaDeCadastro.js';
import {TelaDeExtrato} from './TelaDeExtrato/telaDeExtrato.js'



class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <div>
          <TelaDeCadastro /> 
        </div>

        <div>
        <TelaDeExtrato />
        </div>

       </div>
    );
  }
}

export default App;
