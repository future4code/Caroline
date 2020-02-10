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

class NewPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  handleFieldChange = (event) => {
    this.setState({
		password: event.target.value
    });
  };

  onClickChangePassword = () => {
	const { password } = this.state;
	console.log("teste, senha alterada com sucesso")
  };

  render() {
    const {password } = this.state;

    return (
      <div>
        <ApBar />
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="nova-senha"
            type="password"
            label="digite sua nova senha"
            value={password}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              onClick={this.onClickChangePassword}
              color="primary">
              <Typography color="textSecondary">Alterar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}


export default NewPassword;