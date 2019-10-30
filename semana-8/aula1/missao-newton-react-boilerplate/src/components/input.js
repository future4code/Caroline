import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const PaperStyle = styled(Paper) `
	width: 90vh;
`

export default class CustomizedInputBase extends React.Component {
	state = {

	};
  
render() {
    const { classes } = this.props;	
  return (
    <PaperStyle >
		<TextField
          id="outlined-full-width"
          style={{ margin: 2 }}
          placeholder="Digite sua tarefa"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      
    </PaperStyle>
  );
}
}

/* export default function CustomizedInputBase() {
<InputBase
        className
        placeholder="Digite sua tarefa"
        inputProps={{ 'aria-label': 'Digite sua tarefa"' }}
	  />
	  */