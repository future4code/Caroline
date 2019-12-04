import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import { createTrips } from "../../actions/allActions";
import Header from "../components/Header.js";
import TextField from '@material-ui/core/TextField';

const Form = styled.form `
  margin-left:70vh
  border-width:1px;
  border-style:solid;
  border-color:black;
  border-radius: 5px;
  width:60vh;
  padding:12px;
  margin-top:10px;
  margin-bottom:15px;
  color: #3f51b5;
  background-color:#c5e1a5;
  font-size: 20px;
`

const InputStyled = styled.input `
  width:350px;
  padding: 5px;
  border-radius: 5px;
`

const SelectStyled = styled.select `
  width:350px;
  padding: 5px;
  border-radius: 5px;
`
const ButtonStyled = styled.button `
  width: 150px;
  border-radius: 5px;
  margin:10px;
  padding:10px;
  background-color:#3f51b5;
  color:white;
 
`

const TextFieldStyled = styled.textarea `
  width:350px;
  border-radius: 5px;
`



    class CreateNewTrip extends Component {
        componentDidMount() {
           
          }
        constructor(props) {
          super(props);
          this.state = {
              nome: " ",
              planeta: "",
              data: " ",
              descricao: " ",
              duracao: " ",
              
          };
    }    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
     };

         handleSubmit = event => {
                event.preventDefault();
                this.props.createTripAction(this.state.name, 
                    this.state.planet,
                    this.state.date,
                    this.state.description,
                    this.state.durationInDays);
                alert("Enviado!");
              };
  
      
        render() {
            
          return (
            <div>
              <Header/>
                <Form onSubmit={this.handleSubmit} >
                    <label>
                        <p>Nome:</p>
                            <InputStyled required name="name" pattern="^[a-zA-Z]{5,}" 
                            type="text" value={this.state.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <p>Planeta:</p>
                            <SelectStyled  required name="planet" 
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
                            </SelectStyled >
                    </label>
                    <label>
                        <p>Data:</p>
                            <InputStyled required name="date" value={this.state.date} onChange={this.handleInputChange} 
                            type="date" pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="2019-11-30" />

                    </label>
                    <label>
                        <p>Descrição:</p>
                            <TextFieldStyled
                                          multiline
                                          rows="4"
                                          margin="normal"
                                          variant="outlined"
                                          name="description"
                                          inputProps={{  pattern: "[a-zA-Z\s\\.,]", minlength:"30"  }}
                                          value={this.state.description} 
                                          onChange={this.handleInputChange}  
                              />

                    </label>
                    <label>
                        <p> Duração da viagem em dias:</p>
                            <InputStyled required name="durationInDays" min="50" type="number"
                             value={this.state.durationInDays} onChange={this.handleInputChange}/>
                    </label>

                <ButtonStyled type="submit">Enviar</ButtonStyled>
                </Form>
     
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
  

   //verificar validação "dinÂmica da data"