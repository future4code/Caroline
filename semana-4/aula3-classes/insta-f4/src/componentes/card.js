import React from 'react';
import './card.css';
import PropTypes from 'prop-types';


export function InstaF4(props){
return (
        <div className="feed">

            <div className="usuario">
                <img src={props.imagemUser} alt="" className="imgUser"/>
                <p>{props.userName}</p>
            </div>
            <div className="foto">
                <img src = {props.fotoPrincipal} alt="" className="fotoPrincipal"/>
            </div>
            <div className="likes">
                <img src = {props.likeIcon} alt="" className="likewhite" onClick={props.curtida} />
                <img src = {props.commentIcon} alt="" className="iconeComentario" onClick={props.mostrarComentario}/>
                <p>{props.numerador}</p>
            </div>
        
        </div>
    )
}

InstaF4.propTypes = {
    imagemUser: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    fotoPrincipal: PropTypes.string.isRequired,
    likeIcon: PropTypes.string.isRequired,
    commentIcon: PropTypes.string.isRequired,
    curtida:PropTypes.func.isRequired,
    mostrarComentario:PropTypes.func.isRequired,
    numerador:PropTypes.string.isRequired,
 

  }
     