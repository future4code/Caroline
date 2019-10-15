import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";


function CreateUser (){
    const users = {
        "name": "",
        "email": "",
      }
    

const request = axios.post('https://us-central1-future4-users.cloudfunctions.net/api/users/createUser', users, {
    headers: {
      'api-token': '81d8f6047f40ca5d763b6e78d74bb562'
    }
    
  })
  request.then((response) => {console.log(response)})
}
  



export class InputNomeEmail extends React.Component{
    constructor(props) {
      super(props);
      this.state = {

      };
    }




    render() {
        return (
            <div>
            <p> Qual seu nome?</p>
               <input type="text"/>
            <p> Qual seu email?</p>
                <input type="text"/>
                <button>Cadastre!</button>
        </div>
        );
      }
    }

  CreateUser ()