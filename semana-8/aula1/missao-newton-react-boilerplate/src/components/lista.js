import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {TodoList} from './todoList.js';
import {completeTodo, deleteTodo, fetchTodos, markAllTodosAsDone  } from '../actions/todasActions';
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button) `
	margin: 5px;
`

	class  InteractiveList extends Component {
		componentDidMount() {
		  this.props.fetchAllTodos();
		}	  
    render () {
	
	return (
	    <Grid item xs={12} md={7}>
          <div >
            <List >
              {this.props.todos.map(todo => (
				<TodoList 
					todo={todo}
					task={todo.task}
					onDelete={this.props.deleteTodo}
					onComplete={this.props.completeTodo}
				/>
				))}
				<StyledButton variant="contained" color="primary" onClick={this.props.markAllTodosAsDone}>
					Marcar todas completas
				</StyledButton >
				<StyledButton variant="contained" color="primary" > 
					Todas
				</StyledButton >
				<StyledButton  variant="contained" color="primary">
					Pendentes
				</StyledButton >
				<StyledButton  variant="contained" color="primary">
					Completas
		       </StyledButton>
					
            </List>
          </div>
        </Grid>
		);
	}	
}

const mapStateToProps = state => ({
	todos: state.todos.AllTodos
	});

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch (deleteTodo(id)),
	completeTodo: (id) => dispatch (completeTodo(id)),
	fetchAllTodos: () => dispatch(fetchTodos()),
	markAllTodosAsDone: () => dispatch(markAllTodosAsDone()),
})

	export default connect (mapStateToProps, mapDispatchToProps) (InteractiveList);

	/*<StyledButton variant="contained" color="primary" > 
					Todas
					</StyledButton >
					<StyledButton  variant="contained" color="primary">
					Pendentes
					</StyledButton >
					<StyledButton  variant="contained" color="primary">
					Completas
		       </StyledButton>*/