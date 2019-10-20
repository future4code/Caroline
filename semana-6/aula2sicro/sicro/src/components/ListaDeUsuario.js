import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";
import {InputNomeEmail} from './TelaDeCadastro';

const Lista = styled.div `
border-color: grey;
border-style: solid;
border-width: 1px;
display:flex;
flex-direction: column;
width: 50vh;
margin-left: 75vh;
padding:15px;
justify-content:space-between;
background-image: linear-gradient(45deg, #20B2AA, #FFE4B5);
color:white;
`
const ButtonRemover = styled.button `
width: 12vh;
display:flex;
justify-content:center;
border-radius: 10px;
`

export class ListaDeUsuario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          voltar: false,
          lista:[],

      };
    }

    componentDidMount() {
      this.todosUsuarios()
    }

    botaoDelete =(id) => {
      window.confirm("Tem certeza que deseja remover?")

      axios.delete(
        `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
        {
          headers: { 'api-token': '81d8f6047f40ca5d763b6e78d74bb562'}
      }
    )
      .then((res) => {
        this.todosUsuarios()

      })
    } 

    todosUsuarios = () => {
      axios.get(
        'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers', 
         
         {
        headers: { 'api-token': '81d8f6047f40ca5d763b6e78d74bb562'}
        }).then((res) => {
          this.setState({
            lista:res.data.result
          })
          console.log(res.data)
          })
        }

    render() {
        return (
          <Lista>
           <h2>Cadastrados</h2>
            {
              this.state.lista.map((user,i)=> {
                return(
                  <div key={ i}>
                    <a href="#">{user.name}</a>
                   // <ButtonRemover onClick={ () => {this.botaoDelete(user.id)} }>Remover</ButtonRemover>
                  </div>
                )

              })
            }
          </Lista>
        );
      }
    }