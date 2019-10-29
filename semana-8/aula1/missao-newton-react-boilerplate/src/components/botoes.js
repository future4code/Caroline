import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


export default function ContainedButtons() {
  
	return (
	  <div>
		<Button variant="contained" color="primary">
		Marcar todas completas
		</Button>
		<Button variant="contained" color="primary">
		Todas
		</Button>
		<Button variant="contained" color="primary">
		Pendentes
		</Button>
		<Button variant="contained" color="primary">
		Completas
		</Button>
	  </div>
	);
  }
