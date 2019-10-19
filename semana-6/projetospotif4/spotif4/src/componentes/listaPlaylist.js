import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";

export class ListaPlayL extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          lista: [],
      }
    }
    
    componentDidMount  () {
      axios
        .get ("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists", 
            {
                      headers :  { 'auth': '81d8f6047f40ca5d763b6e78d74bb562'}
                    })
          .then((res) => {
          this.setState({
            lista:res.data.result
          })
          console.log(res.data)
        })
}


       /*getAllPlaylists = () => {
          axios
        .get ("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists", 
            {
                      headers :  { 'auth': '81d8f6047f40ca5d763b6e78d74bb562'}
                    })
          .then((res) => {
          this.setState({
            lista:res.data.result
          })
          console.log(res.data)
        })
}
    }
  */
  
  render() {
        return (
          <div> 
            <h1>Minhas Playlists</h1>   {  
              this.state.lista.map((pl, i) => {
                return(
                  <div key={ i}>
                      <p> {pl.name}</p>
                  </div>
              )
              })
          }
          </div>
        );
      }
    }
    
      