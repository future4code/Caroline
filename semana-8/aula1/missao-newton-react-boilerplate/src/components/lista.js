import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import styled from "styled-components";
import { connect } from 'react-redux';
import {TodoList} from './todoList.js'

const DoneIconGreen = styled(DoneIcon)({
    color: '#4caf50',
});  

const DeleteIconRed = styled(DeleteIcon)({
    color: '#d32f2f',
});  

  
  const InteractiveList= props => {
	const onDelete =() => {
		console.log("apaga!");
		}
		
		const onComplete =() => {
		console.log("completa!");
		}
  
	return (
	    <Grid item xs={12} md={7}>
          <div >
            <List >
              {props.todos.map(todo => (
				<TodoList 
					key={todo.id}
					task={todo.task}	
				/>
				))}
            </List>
          </div>
        </Grid>
		);
}

const mapStateToProps = state => ({
	todos: state.todos.AllTodos
	});

	export default connect (mapStateToProps) (InteractiveList);