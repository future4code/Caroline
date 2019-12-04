import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import {updateTodoTask, createTodo} from "../actions/todasActions"

const PaperStyle = styled(Paper) `
	width: 90vh;
`
	
const CustomizedInputBase = props => {
	const onUpdateTodoTask = (event) => {
		props.updateTodoTask(event.target.value);
	}

	const onEnterPress = (event) => {
		if(event.key === "Enter"){
			const newId =new Date().getTime();
			props.createNewTodo(newId);

		}
	}
	return <PaperStyle >
				<TextField
				value={props.currentTodoTask }
				onChange={onUpdateTodoTask}
				onKeyPress={onEnterPress}
				style={{ margin: 2 }}
				placeholder="Digite sua tarefa"
				fullWidth
				variant="outlined"
				InputLabelProps={{
					shrink: true,
				}}
				/>
		 </PaperStyle>
   } 
   
   const mapStateToProps =(state) => ({
	currentTodoTask: state.todos.currentTodoTask,
   })
   
   const mapDispatchToProps =(dispatch) => ({
	updateTodoTask:(newTask) => dispatch(updateTodoTask(newTask)),
	createNewTodo: () => dispatch(createTodo()),
   })

   export default connect(mapStateToProps, mapDispatchToProps) (CustomizedInputBase)

/* export default class CustomizedInputBase extends React.Component {
	state = {

	};
  
render() {
    const { classes } = this.props;	
  return (
    <PaperStyle >
		<TextField
		  value={props.currentTodoTask }
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

export default function CustomizedInputBase() {
<InputBase
        className
        placeholder="Digite sua tarefa"
        inputProps={{ 'aria-label': 'Digite sua tarefa"' }}
	  />
	  */