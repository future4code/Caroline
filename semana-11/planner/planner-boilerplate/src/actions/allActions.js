import axios from "axios"


export const getTasksAction = (tasks) => ({
    type: "GET_TASKS",
    payload: {
      tasks:tasks,
    }
  });
  
export const getTasks = () => async (dispatch, getState) => {
    const response = await axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-caroline",  );

      dispatch(getTasksAction(response.data));
  };


export const createTasks = (text,day) => async (dispatch) => {

    const data = {
        text:text,
        day:day,
    }

	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-caroline', data,
    )
    
    if (response.status === 200){
        dispatch(getTasks())
    }
}