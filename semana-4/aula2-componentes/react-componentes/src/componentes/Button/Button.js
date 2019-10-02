import React from 'react';
import './Button.css';
import { PropTypes } from 'prop-types';

export function button(props) {
    return (
       <div> 
            <div className="botao"> 
                <button><img src={props.iconeBotao} alt="" className="iconeBotao" />{props.textoBotao}</button>  
            </div>
       </div> 
  )
}
button.propTypes = {
    iconeBotao: PropTypes.string.isRequired,
    textoBotao: PropTypes.string.isRequired
  }