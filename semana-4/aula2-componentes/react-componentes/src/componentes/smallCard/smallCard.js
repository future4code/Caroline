import React from 'react';
import './smallCard.css';
import PropTypes from 'prop-types';

export function smallCard(props) {
    return (
    <div>
        <div className="SmallCard"> 
            <img src={props.iconeEmail}/> 
            <label> Email:</label>  
            <p>{props.email}</p>
        </div>

        <div className="SmallCard2">
            <img src={props.iconeCasa}/>             
            <label> Endereço:</label>  
            <p>{props.end}</p>  
         </div>
   </div>
    )
}
smallCard.propTypes = {
    email: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    iconeCasa: PropTypes.string.isRequired,
    iconeEmail: PropTypes.string.isRequired
  }