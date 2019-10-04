import React from 'react';
import logo from './logo.svg';
import './App.css'
import { InstaF4 } from './componentes/card.js';

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
  comment: require ('./componentes/icones/comment_icon.svg'),
}


class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      likeIcon: false,
      };
  }  
  
botaoCurtido = () =>{
  const semLike = this.state.likeIcon;
  this.setState ({likeIcon : !this.state.likeIcon})
};

/*botaoCurtido = () =>{
  const curtida = likes.like2
  this.setState ({likeIcon : curtida})
  //console.log ("testei")
};*/

render() {
  let likeIcon="";
  const curtida = likes.like2
  //let iconeCurtido = require ('./componentes/icones/favorite.svg');

  if(this.state.likeIcon === true){
    likeIcon = curtida
    console.log ("testeiiii")
    }

  return (
  <div className="dados">
    <InstaF4
    imagemUser={usuario.imagemUser}
    userName = {usuario.userName}
    
    fotoPrincipal={fotoPrincipal.fotoPrincipal}
    
    likeIcon = {likes.like1}
    likeIconLiked = {likes.like2}
    commentIcon = {likes.comment}
    curtida = {this.botaoCurtido}
    
    />

{likeIcon}
  </div>
   ) 
}

}





export default App;
