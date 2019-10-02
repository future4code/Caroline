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
  comment: require ('./componentes/icones/comment_icon.svg')
}


function App() {
  return (
    <div className="App">
      <InstaF4
      imagemUser={usuario.imagemUser}
      userName = {usuario.userName}

      fotoPrincipal={fotoPrincipal.fotoPrincipal}

      likeIcon = {likes.like1}
      commentIcon = {likes.comment}
      />
    </div>
  );
}

export default App;
