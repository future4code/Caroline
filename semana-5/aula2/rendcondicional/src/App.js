import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import styled from "styled-components";




class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         escolhasDeEscolaridade : "Ensino Médio Completo",           
    }
  }

    escolhasDeEscolaridade= (event) => {
      this.setState({ escolhasDeEscolaridade: event.target.value });
    }


    render() {
      return (
        <div>
          <p> Qual seu nome?</p>
          <input type="text"/>
          <p> Qual sua idade?</p>
          <input type="text"/>
          <p> Qual seu email?</p>
          <input type="text"/>
          <p> Qual sua escolaridade?</p>
          <select value={this.state.value} onChange={this.escolhasDeEscolaridade}>
            <option id=" EMC" value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option id=" EMI" value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option id=" ESC" value="Ensino Superior Completo">Ensino Superio Completo</option>
            <option id=" ESI" value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
          </select>
          <button>continuar</button>
          
  
        </div>
      );
    }


}

export default App;
