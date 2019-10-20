import React from 'react';
import logo from './logo.svg';
import './App.css'
import { InstaF4 } from './componentes/card.js';
import PropTypes from 'prop-types';

const usuario = {
  imagemUser: require ('./componentes/img1.jpg'),
  userName: "Caroline"
}

const fotoPrincipal= {
  fotoPrincipal: 'https://picsum.photos/350/290?'
}

const likes = {
  like1: require ('./componentes/icones/favorite-white.svg'),
  like2:require ('./componentes/icones/favorite.svg'),
  comment: require  ('./componentes/icones/comment_icon.svg')
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

      listaDePosts: [{
        userImg:props.imagemUser,
        userNome:usuario.userName,
        post: "https://picsum.photos/350/290?",
        curtida: "",
        comentario:"",

      }]

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
    likeIcon = <div className ="inputDeComentarios"> <input onChange={this.numeradorComentario} ></input>
    <button onClick={this.botaoEnviarComentario}>Enviar</button> </div>
  }


  return (
  <div className="dados">
    <InstaF4
   imagemUser = {usuario.imagemUser}
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
// imagemUser={props.imagemUser}