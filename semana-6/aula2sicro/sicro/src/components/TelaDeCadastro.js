import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";

const Inputs = styled.div `
border-color: grey;
border-style: solid;
border-width: 1px;
display:flex;
flex-direction: column;
width: 50vh;
margin-left: 75vh;
padding:10px;
background-color:#FAEBD7;
background-image: linear-gradient(45deg, #E6E6FA, #FFE4B5);
`
const ButtonSalvar = styled.button `
width: 10vh;
display:flex;
margin-top:5px;
margin-left:20vh;
justify-content:center;
border-radius: 20px;
`

export class InputNomeEmail extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email :"",
        //lista:[],
        //errorMsg: "",
        
      };
    }

OnChangeName = event => {
  this.setState({name: event.target.value });
  //console.log("testeiNome")
}   

OnChangeEmail  = event => {
  this.setState({email: event.target.value });
  //console.log("testeiEmail")
} 

OnClickSave = () => {
//window.alert("Salvo")

const users = { 
  name: this.state.name,
  email: this.state.email
}
console.log (users)

  axios.post(
    'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser', 
     users, 
     {
    headers: { 'api-token': '81d8f6047f40ca5d763b6e78d74bb562'}
    })
    .then ((res) => {
      window.alert("Salvo")
    })     
}

    render() {
        return (
            <Inputs>
              <p> Qual seu nome?</p>
                <input type="text" value= {this.state.name} onChange={this.OnChangeName} />
              <p> Qual seu email?</p>
                <input type="text"  value={this.state.email} onChange={this.OnChangeEmail} />  
                  <ButtonSalvar onClick={this.OnClickSave}> Salvar </ButtonSalvar>        
            </Inputs>
        );
      }
    }

