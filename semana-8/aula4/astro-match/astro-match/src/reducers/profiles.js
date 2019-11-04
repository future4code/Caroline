const initialState = {
profiles: { },
  
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ACTION":
        return { ...state, profiles: action.payload.profiles };

    default:
        return state;
  }
}


export default profiles
