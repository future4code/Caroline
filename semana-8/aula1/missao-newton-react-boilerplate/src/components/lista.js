import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {TodoList} from './todoList.js';
import {completeTodo, deleteTodo } from '../actions/todasActions';


  const InteractiveList= props => {
  
	return (
	    <Grid item xs={12} md={7}>
          <div >
            <List >
              {props.todos.map(todo => (
				<TodoList 
					todo={todo}
					task={todo.task}
					onDelete={props.deleteTodo}
					onComplete={props.completeTodo}
					
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

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch (deleteTodo(id)),
	completeTodo: (id) => dispatch (completeTodo(id))	
})

	export default connect (mapStateToProps, mapDispatchToProps) (InteractiveList);