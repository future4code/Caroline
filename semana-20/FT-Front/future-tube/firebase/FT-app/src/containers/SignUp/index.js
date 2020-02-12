import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography'
import ApBar from './../../components/topo';



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
      username: "",
      email: "",
      password: "",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleOnSubmit = event => {
      
  };

  /*
    const { email, password, username } = this.state
    event.preventDefault();
    this.props.createNewUser(email, password, username);

  */

  onClickSignUp= () => {
    const { username, email, password } = this.state;
    this.props.createNewUser(username, email, password);
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
            value={this.state.username}
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
            value={this.state.password}
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


export default SignUp
    