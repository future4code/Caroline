const initialState = {
	todos:[],
	currentTodoTask: "",
}

export const todos = (state = initialState, action) => {
 switch(action.type){
	case "CREATE_TODO" :
		const newTodos = [...state.todos, {task:action.payload.task, completed: false}];
		return {...state, todos: newTodos}
	default:
	return state;
	}	
}

export default todos;
