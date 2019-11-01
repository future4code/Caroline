const initialState = {
	AllTodos:[],
	currentTodoTask: " ",
}

export const todos = (state = initialState, action) => {
	switch(action.type){
		case "CREATE_TODO" :
			const newTodo = {id: action.payload.id, task:state.currentTodoTask, completed: false};
	
	
			const newTodos = [...state.AllTodos, newTodo];
			return {...state, AllTodos: newTodos, currentTodoTask: "" }
	
		case "UPDATE_TODO_TASK":
			return {...state, currentTodoTask: action.payload.newTask}	
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

