
import React from 'react';
import PropTypes from 'prop-types';
import {InstaF4} from './components/card'
import styled from "styled-components";
import {ContainerTeste} from "./components/container";



const InputDeComentarios = styled.div`
    display:flex;
    flex-direction: column;
    width: 50vh;
    margin-left: 75vh;
`

const usuario = {
  imagemUser: 'https://picsum.photos/350/290?',
  userName: "Caroline"
}

const fotoPrincipal= {
  fotoPrincipal: 'https://picsum.photos/328/290?'
}

const likes = {
  like1: require ('./components/icones/favorite-white.svg'),
  like2:require ('./components/icones/favorite.svg'),
  comment: require  ('./components/icones/comment_icon.svg')
}

const numeracao = {
numeroLike : 0,
numeroLike1:1,
numeroComments: 0
}

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      likeIcon: false,
      inputComentario: false,
      numeracaoComentarios: 0,

      };
  }  
  
botaoCurtido = () =>{
  const semLike = this.state.likeIcon;
  this.setState ({likeIcon : !this.state.likeIcon}) 
};

botaoComentario = () => {
  const esconderComentario = this.state.inputComentario;
  this.setState ({ inputComentario : !this.state.inputComentario})
}

botaoEnviarComentario = () => {
  const numerador = this.state.numeracaoComentarios;
  this.setState ({numeracaoComentarios: this.state.numeracaoComentarios + 1})
  console.log(numerador)
}

render() {
  let likeIcon

  if(this.state.inputComentario === true){
    likeIcon = <InputDeComentarios> <input onChange={this.numeradorComentario} ></input >
    <button  onClick={this.botaoEnviarComentario}>Enviar</button> </InputDeComentarios>
  }


  return (
  <div className="dados">
    <ContainerTeste/>
    <InstaF4
    imagemUser={usuario.imagemUser}
    userName = {usuario.userName}
    
    fotoPrincipal={fotoPrincipal.fotoPrincipal}
    
    likeIcon={this.state.likeIcon ? likes.like2 : likes.like1}
    likeIconLiked = {likes.like2}
    curtida = {this.botaoCurtido}

    commentIcon = {likes.comment}
 
    mostrarComentario ={this.botaoComentario}
    numeradorComentario ={this.numeradorComentario}

    numeracaoCurtida ={this.state.likeIcon ? numeracao.numeroLike1 : numeracao.numeroLike }
    numeracaoComentario = {numeracao.numeroComments}
    botaoEnviarComentario={this.botaoEnviarComentario}

    numeracaoTesteComent = {this.state.numeracaoComentarios ? numeracao.numeroComments : this.botaoEnviarComentario  }
    />
  
{likeIcon}
 
  </div>
  
   ) 
}

}

export default App;