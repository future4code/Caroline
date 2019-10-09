import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { TelaDeCadastro } from './TelaDeCadastro/telaDeCadastro.js';



class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TelaDeCadastro /> 
      </div>
    );
  }
}

export default App;
