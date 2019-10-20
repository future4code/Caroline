import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios"

export class CriaPlaylist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          playlist: "",
      };
    }
        
    
    SalvarPlaylist = () => {
            
        const playlist= { 
            name: this.state.playlist,
            }
            console.log (playlist)
            
              axios.post(
                'https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist', 
                playlist, 
                 {
                headers: { 'auth': '81d8f6047f40ca5d763b6e78d74bb562'}
                })
                .then ((res) => {
                    
                  window.alert("Salvo!")
                })     
                .catch((err) => {
                    window.alert("Não coloque o mesmo nome nas Playlists!")
            })
        }

    OnChangePlaylist = event => {
        this.setState({playlist: event.target.value});
        console.log ("funcionei")
    }

     render() {
        return (
             <div>
                 <p>Nomeie sua Playlis! ⬇️</p>
                <input type="text" value= {this.state.playlist} onChange={this.OnChangePlaylist} />
                <button onClick={this.SalvarPlaylist}>Salve!</button>
             </div>
        )
    } 
}
    