import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const BlocoDeTarefas = styled.div `
background-color: #A9A9F5;
width: 50vh;
display:flex;
flex-direction:column;
margin-left: 75vh;
height:50vh;

`

export class CriarTarefa extends React.Component {
    constructor() {
      super();
      this.state = {
        criarTarefa:[],
        conclui:["concluido"],
   
      };
    }

      addTarefa(e) {
        e.preventDefault();
        const {criarTarefa} = this.state;
        const novaTarefa = this.novaTarefa.value;

        this.setState({
          criarTarefa: [...this.state.criarTarefa, novaTarefa]
        })
      }
    
      apagaTarefa(item){
        const novasTarefinhas = this.state.criarTarefa.filter(tarefinha => {
          return tarefinha !== item;
        })

        this.setState ({
          criarTarefa: [...novasTarefinhas]
        })
        console.log("apaguei")
      }

      apagaTudo(){
        this.setState({
          criarTarefa:[]
        })
      }

      tarefaFeita(item){
        //console.log ("feitas..teste")
      }

render() {
    const {criarTarefa} = this.state;

    return (
        <BlocoDeTarefas>
            <form>
              <input type="text" ref={(input) =>{this.novaTarefa = input}}  />
              <button  onClick={(e) => {this.addTarefa(e)}}>Add Tarefa!</button>
            </form>
            <table>
              <tr>
                <th><button>Feito!</button></th>
                <th>Tarefa</th>
                <th><button>Remover</button></th>
              </tr>
                {criarTarefa.map(item =>{
                  return( 
                  <tr>
                  <th><button onClick={this.tarefaFeita()}>Feito!</button></th>
                    <th>{item}</th>
                    <th><button onClick={(e)=> this.apagaTarefa(item)}>Remover</button></th>
                  </tr>
                  )
                })
                
              }
              <tr>
                <th><button onClick={(e)=> this.apagaTudo()}>Limpa Tudo!</button></th>
                </tr>
            </table>
            

            
          </BlocoDeTarefas>
        );
      }
    }    
    //onSubimit no form(ou botao) p/ ñ dar refresh 

     /*componentDidMount() {
        console.log("Montado");
      }
    
    componentWillUnmount() {
        console.log("Desmontado");

      }
    
    componentDidUpdate() {
        console.log("Fui Atualizado!");
      }*/