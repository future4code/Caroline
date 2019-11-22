
const initialState = {
  tasks: [],
  
  };
  
  const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return { ...state, tasks: action.payload.tasks };
        default:
            return state;
    }
  };
  
  export default tasks;