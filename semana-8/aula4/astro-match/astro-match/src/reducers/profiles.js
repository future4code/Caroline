const initialState = {
id : " ",
name: " ",
age: " ",
bio: " ",
photo: " ",
matches: [],
  
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ACTION":
        const profiles_data = {
          ...state,
          id: action.payload.id,
          name: action.payload.name,
          age: action.payload.age,
          bio: action.payload.bio,
          photo: action.payload.photo,
        
        };
        return { profiles_data};
    case "GET_MATCH_ACTION":
        const matchesData = {profiles_data}
       return {...state,matchesData}
    default:
        return state;
  }
}


export default profiles
