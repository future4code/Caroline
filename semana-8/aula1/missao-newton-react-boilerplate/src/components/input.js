/*import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';


export default function Inputs() {
	//const classes = useStyles();

	  
        return (
			<div className>
				<Input
					defaultValue=" "
					inputProps={{
					'aria-label': 'description',
					}}
      			/>
			</div> 

        )    

}
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';



export default function CustomizedInputBase() {
  

  return (
    <Paper >
	
      <InputBase
        className
        placeholder="Digite sua tarefa"
        inputProps={{ 'aria-label': 'Digite sua tarefa"' }}
      />
    

    </Paper>
  );
}