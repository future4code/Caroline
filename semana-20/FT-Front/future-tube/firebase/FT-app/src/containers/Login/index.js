import React, { Component } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ApBar from './../../components/topo';

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled(Button)`
 width: 100px;
`

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (token) {
      this.props.goToFeedPage();
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = () => {
    const { email, password } = this.state;
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <ApBar />
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
          />

          <TextField
            required
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              onClick={this.onClickLogin}
              color="primary">
              <Typography color="textSecondary">Entrar</Typography>
            </ButtonStyled>
            <ButtonStyled
              variant="contained"
              onClick={this.props.goToSignUpPage}
              color="primary">
              <Typography color="textSecondary">Cadastrar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}


export default Login;
