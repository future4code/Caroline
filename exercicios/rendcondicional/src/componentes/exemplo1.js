import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

function MsgGeral (props){
    if(props.logado){
        return (<Home/>)
    }
        return (<MsgUser/>)
}


function Home(props){
return (
    <div> 
        <p>BV, login</p>
        <button>TEste</button>
        <button>teste2</button>
    </div>
    )
}

 function MsgUser(props){
     return(
         <div>logue</div>
     )
 }

class Exemplo extends React.Component {
        constructor(props){
            super(props)
            this.msgBotao = "Login"
            this.state= {
                logado: false,
            }
        }


aoClicar =()=> {
  this.msgBotao = this.state.logado ? "Sair" : "Login";
    ///if (this.state.logado) {
    //  this.msgBotao = "Sair"
    //  } else {
    //  this.msgBotao = "Login"
    //  }
    this.setState({logado: !this.state.logado})
}

render(){
return (
    <div>
        <MsgGeral logado={this.state.logado}/>
        <button onClick={this.aoClicar}>{this.msgBotao}</button>
    </div>
)

}
}
