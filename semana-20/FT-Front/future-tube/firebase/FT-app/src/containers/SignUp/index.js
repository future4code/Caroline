import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography'
import ApBar from './../../components/topo';
import {createSignUp} from "../../actions/allActions";
import {connect} from "react-redux";


const PageWrapper = styled.div``

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 60px;
`

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password_: "",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password_: event.target.value
    });
  };

  handleOnSubmit = event => {
	const { name, email, password_ } = this.state;
	this.props.createNewUser(name, email, password_);
	console.log("subimitt")
  };

  onClickSignUp= () => {
    const { name, email, password_ } = this.state;
	this.props.createNewUser(name, email, password_);
	console.log("enviado")
  };

  
  render() {
    return (
      <PageWrapper>
          <ApBar />
        <Form onSubmit={this.handleOnSubmit}>
          <TextField
            required
            id="outlined-name"
            type="text"
            label="Nome"
            value={this.state.name}
            onChange={this.handleNameChange}
            margin="normal"
            variant="outlined"
            name="username"
          />
          <TextField
            required
            id="outlined-name"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            margin="normal"
            variant="outlined"
            name="email"
          />
          <TextField
            required
            id="outlined-name"
            type="password"
            label="Senha"
            value={this.state.password_}
            onChange={this.handlePasswordChange}
            margin="normal"
            variant="outlined"
            name="password"
          />
        <Button 
          type="submit" 
          onClick={this.onClickSignUp}
          variant="contained"
          color="primary"
          >
          <Typography color="textSecondary">
            Enviar
          </Typography>
        </Button>
      </Form>
      </PageWrapper>
    );
  }
}


function mapDispatchToProps(dispatch){
	return {
	  createNewUser: (name, email, password_) => dispatch(createSignUp(name, email, password_)),
	 }
   };
  
  export default connect(null, mapDispatchToProps)(SignUp);
	  

    