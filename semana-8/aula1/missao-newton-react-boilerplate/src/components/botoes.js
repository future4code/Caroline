import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


const StyledButton = styled(Button) `
	margin: 5px;
`

export default function ContainedButtons() {
  
	return (
	  <div>
		<StyledButton variant="contained" color="primary">
		Marcar todas completas
		</StyledButton >
		<StyledButton variant="contained" color="primary">
		Todas
		</StyledButton >
		<StyledButton  variant="contained" color="primary">
		Pendentes
		</StyledButton >
		<StyledButton  variant="contained" color="primary">
		Completas
		</StyledButton>
	  </div>
	);
  }
