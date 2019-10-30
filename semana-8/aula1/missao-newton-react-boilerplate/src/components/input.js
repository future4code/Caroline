import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import styled from "styled-components";

const PaperStyle = styled(Paper) `
	width: 90vh;
`
export default function CustomizedInputBase() {

  return (
    <PaperStyle >
      <InputBase
        className
        placeholder="Digite sua tarefa"
        inputProps={{ 'aria-label': 'Digite sua tarefa"' }}
      />
    </PaperStyle>
  );
}