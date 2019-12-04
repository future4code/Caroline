const initialState = {
	AllTodos:[],
	currentTodoTask: " ",
}

export const todos = (state = initialState, action) => {
	console.log(action)
	switch(action.type){
		case "CREATE_TODO" :
			const newTodo = {id: action.payload.id, task:state.currentTodoTask, completed: false};
	
			const newTodos = [...state.AllTodos, newTodo];
			return {...state, AllTodos: newTodos, currentTodoTask: "" }
	
		case "UPDATE_TODO_TASK":
			return {...state, currentTodoTask: action.payload.newTask}	

		case "COMPLETE_TODO" :
			const indexToEdit = state.AllTodos.findIndex((todo) => todo.id === action.payload.id)
			const newAllTodos = [...state.AllTodos];

			 const oldTodoValue = state.AllTodos[indexToEdit].done;
			  newAllTodos[indexToEdit].done = !oldTodoValue;

			return {...state, AllTodos: newAllTodos}


		case "DELETE_TODO" :
			const indexToRemove = state.AllTodos.findIndex((todo) => todo.id === action.payload.id)
			const newTodosWithoutRemoved = [...state.AllTodos];

			newTodosWithoutRemoved.splice(indexToRemove, 1);

			return {...state, AllTodos: newTodosWithoutRemoved}	

		case "SET_TODOS":
			return {...state, AllTodos: action.payload.AllTodos};	
		
		default:
		return state;
}}

export default todos;

 /*switch(action.type){
	case "CREATE_TODO" :
		const newTodos = [...state.todos, {task:action.payload.task, completed: false}];
		return {...state, todos: newTodos}
	case "UPDATE_TODO_TASK":
		return {...state, currentTodoTask: action.payload.newTask}	
	default:
	return state;
	}	
}*/

