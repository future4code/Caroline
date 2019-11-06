import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";


    class CreateNewTrip extends Component {
        constructor(props) {
          super(props);
          this.state = {
              nome: " ",
              data: " ",
              descricao: " ",
          };
    }    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
     };
  
   
      
        render() {

            const handleSubmit = event => {
                event.preventDefault();
                alert("TEste");
              };
          return (
            <div>
                <form onSubmit={handleSubmit} >
                    <label>
                        <p>Nome:</p>
                            <input required name="name" pattern="^[a-zA-Z]{5,}" 
                            type="text" value={this.state.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <p>Planeta:</p>
                            <select>
                                <option value="Mercury">Mercúrio</option>
                                <option value="Venus">Vênus</option>
                                <option value="Earth">Terra</option>
                                <option value="Mars">Marte</option>
                                <option value="Jupiter">Júpiter</option>
                                <option value="Saturn">Saturno</option>
                                <option value="Uranus">Urano</option>
                                <option value="Neptune">Netuno</option>
                                <option value="Pluto">Plutão</option>
                            </select>
                    </label>
                    <label>
                        <p>Data:</p>
                            <input required name="date" value={this.state.date} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        <p>Descrição:</p>
                            <textarea required name="description" pattern="^[a-zA-Z]{30,}" type= "text" 
                            value={this.state.description} onChange={this.handleInputChange}  />
                    </label>
                    <label>
                        <p> Duração da viagem em dias:</p>
                            <input required name="durationInDays" min="50" type="number" />
                    </label>

                <button type="submit">Enviar</button>
                </form>
     
            </div>
          );
        }
      }
  export default (CreateNewTrip);


  //connect(
    //null,
   // mapDispatchToProps