import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import { createTrips } from "../../actions/allActions";


    class CreateNewTrip extends Component {
        componentDidMount() {
           
          }
        constructor(props) {
          super(props);
          this.state = {
              nome: " ",
              data: " ",
              descricao: " ",
              duracao: " ",
              planeta: "",
          };
    }    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
     };

         handleSubmit = event => {
                event.preventDefault();
                this.props.createTripAction(this.state.name, this.state.planet,this.state.date,this.state.description,this.state.durationInDays);
                alert("Enviado!");
              };
  
      
        render() {
            
          return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <p>Nome:</p>
                            <input required name="name" pattern="^[a-zA-Z]{5,}" 
                            type="text" value={this.state.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <p>Planeta:</p>
                            <select required name="planet" 
                            type="text" value={this.state.planet} onChange={this.handleInputChange}>

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
                            <input required name="date" value={this.state.date} onChange={this.handleInputChange} 
                            type="date" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2019-11-10" />
                      
                             
                    </label>
                    <label>
                        <p>Descrição:</p>
                            <textarea required name="description" pattern="^[a-zA-Z]{30,}" type= "text" 
                            value={this.state.description} onChange={this.handleInputChange}  />
                    </label>
                    <label>
                        <p> Duração da viagem em dias:</p>
                            <input required name="durationInDays" min="50" type="number"
                             value={this.state.durationInDays} onChange={this.handleInputChange}/>
                    </label>

                <button type="submit">Enviar</button>
                </form>
     
            </div>
          );
        }
      }

      const mapDispatchToProps = dispatch => ({
        createTripAction: (name,planet,date,description,durationInDays) => dispatch(createTrips(name,planet,date,description,durationInDays)),
    
      });
      
      export default connect(
        null,
        mapDispatchToProps
      )(CreateNewTrip)
  


  //connect(
    //null,
   // mapDispatchToProps
   //verificar validação "dinÂmica da data"