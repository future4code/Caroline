import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';


export function BigCard(props) {
  return (
     <div> 
        <div className="bigCard">
            <h4>{props.nome}</h4>
                <div className="divsBigCard1">
                    <img src={props.imagem} alt="" className="divsBigCardImg" />
                    <p > {props.texto}</p>
                </div>
        </div>
  
    </div> 
  )
}

BigCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }
//