import React from 'react';
import logo from './logo.svg';
import './App.css'
import { InstaF4 } from './componentes/card.js';


class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      likeIcon: true
      };
  }  
  
botaoCurtido = () =>{
  const semLike = this.state.likeIcon;
  this.setState ({likeIcon : !this.state.likeIcon})
};

render() {
  let curtido;
  let likeIcon;
  let iconeCurtido = require ('./componentes/icones/favorite.svg')

  if(this.state.likeIcon === false){
    likeIcon = iconeCurtido
    }
  return (
  <div className="dados">
    <InstaF4
    imagemUser={usuario.imagemUser}
    userName = {usuario.userName}
    
    fotoPrincipal={fotoPrincipal.fotoPrincipal}
    
    likeIcon = {likes.like1}
    commentIcon = {likes.comment}
    Curtida = {this.botaoCurtido}
    />
  </div>
   ) 
}

}

const usuario = {
  imagemUser: require ('./componentes/img1.jpg'),
  userName: "Caroline"
}

const fotoPrincipal= {
  fotoPrincipal: 'https://picsum.photos/350/290?'
}

const likes = {
  like1: require ('./componentes/icones/favorite-white.svg'),
  comment: require ('./componentes/icones/comment_icon.svg')
}



export default App;
