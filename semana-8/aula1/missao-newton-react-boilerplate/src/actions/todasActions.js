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

export const completeTodo = (id) => ({
	type: "COMPLETE_TODO",
	payload: {
		id:id,	
    }
})

export const deleteTodo = (id) => ({
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
	  

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*const newTask = () => {
	return {
	  type: "NEW_TASK"
	};
  };
  
  export function newTaskInput(props) {
	const dispatch = useDispatch();
  
	return <input onChange={() => dispatch(newTask())}></input>;
  }
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const AddTask = () => {
  return {
    type: "ADD_TASK"
  };
};

export function AddTaskButton(props) {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(AddTask())}>Cadastre Tarefa</button>;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const AllTasks = () => {
	return {
	  type: "ALL_TASKS"
	};
  };
  
  export function AllTasksButton(props) {
	const dispatch = useDispatch();
  
	return <button onClick={() => dispatch(AllTasks())}>Todas Tarefa</button>;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UnfinishedTasks = () => {
	return {
	  type: "UNFINISHED_TASKS"
	};
  };
  
  export function UnfinishedTaskButton(props) {
	const dispatch = useDispatch();
  
	return <button onClick={() => dispatch(UnfinishedTasks())}>Tarefa Inacabadas</button>;
  }

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FinishedTasks = () => {
	return {
	  type: "FINISHED_TASKs"
	};
  };
  
  export function FinishedTaskButton(props) {
	const dispatch = useDispatch();
  
	return <button onClick={() => dispatch(FinishedTasks ())}>Tarefa Completas</button>;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const removeTask = () => {
	return {
	  type: "REMOVE_TASK"
	};
  };
  
  export function removeTaskButton(props) {
	const dispatch = useDispatch();
  
	return <button onClick={() => dispatch(removeTask ())}>Remova</button>;
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const removeAll= () => {
	return {
	  type: "REMOVE_ALL"
	};
  };
  
  export function removeAllButton(props) {
	const dispatch = useDispatch();
  
	return <button onClick={() => dispatch(removeAll ())}>Remova</button>;
  }*/