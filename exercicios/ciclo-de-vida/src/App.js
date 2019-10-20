import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {CriarTarefa} from './componentes/Criatarefas.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
 
    }
  }

  render() {
   
    return (
      <div>
     <CriarTarefa />
 
      </div>
    );
  }
}

export default App;
