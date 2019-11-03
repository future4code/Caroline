import React from "react";
import { useDispatch } from "../redux/react-redux-f4";
import axios from "axios";

const createTodoAction = (id, task) => {
	return{
	   type: "CREATE_TODO",
	   payload:{
         id:id,	
	   }
    }
}

export const updateTodoTask = (newTask) => ({
	type: "UPDATE_TODO_TASK",
	payload: {
	   newTask: newTask
    }
})

 const completeTodoAction = (id) => ({
	type: "COMPLETE_TODO",
	payload: {
		id:id,	
    }
})

 const deleteTodoAction = (id) => ({
	type: "DELETE_TODO",
	payload: {
		id:id,	
    }
})

export const   setTodos = AllTodos => ({
	type: "SET_TODOS",
	payload:{
	AllTodos:AllTodos
   }
})

export const fetchTodos = () => async (dispatch, getState) => {
	const response = await axios.get(
	  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/caroline/todos"
	);
  
	dispatch(setTodos(response.data.todos));
  };

export const createTodo = () => async (dispatch, getState) => {
	const newTodoTask = getState().todos.currentTodoTask;
		
	const response = await axios.post(
		  "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/caroline/todos",
		  {
			text: newTodoTask
		  }
		);
	  
	const { id } = response.data.todo
	  
	dispatch(createTodoAction(id, newTodoTask));
};
	  
export const completeTodo = (id) => async (dispatch, getState) => {
	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/caroline/todos/${id}/toggle`)
  
	dispatch(completeTodoAction(id));
  }

  export const deleteTodo = (id) => async (dispatch, getState) => {
	await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/caroline/todos/${id}`)
  
	dispatch(deleteTodoAction(id));
  }

  export const markAllTodosAsDone = () => async (dispatch, getState) => {
	const AllTodos = getState().todos.AllTodos;
	const undoneTodos = AllTodos.filter(todo => !todo.done).map(todo => todo.id);

  }