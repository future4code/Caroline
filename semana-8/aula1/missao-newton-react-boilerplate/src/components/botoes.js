import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = styled(Button) `
	margin: 5px;
`
const styles = theme => ({
	button: {
	  margin: theme.spacing.unit,
	},
	input: {
	  display: 'none',
	},
  });

		function ContainedButtons(props) {
		const { classes } = props;
  
	return (
	  <div>
		<StyledButton variant="contained" color="primary" className={classes.button}>
		Marcar todas completas
		</StyledButton >
		<StyledButton variant="contained" color="primary" className={classes.button}> 
		Todas
		</StyledButton >
		<StyledButton  variant="contained" color="primary" className={classes.button}>
		Pendentes
		</StyledButton >
		<StyledButton  variant="contained" color="primary" className={classes.button}>
		Completas
		</StyledButton>
	  </div>
	);
  }

  ContainedButtons.propTypes = {
	classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ContainedButtons);