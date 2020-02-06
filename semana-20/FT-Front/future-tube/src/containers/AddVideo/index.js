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

class AddVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
		AddVideoLink: "",
    };
  }

  handleFieldChange = (event) => {
    this.setState({
		AddVideoLink: event.target.value
    });
  };

  onClickAddVideo = () => {
	const { AddVideoLink } = this.state;
	console.log("teste, video adicionado com sucesso")
  };

  render() {
    const {AddVideoLink } = this.state;

    return (
      <div>
        <ApBar />
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="Add Video"
            type="text"
            label="Adicione um novo vídeo"
            value={AddVideoLink}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              onClick={this.onClickAddVideo}
              color="primary">
              <Typography color="textSecondary">Adicionar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}


export default AddVideo;