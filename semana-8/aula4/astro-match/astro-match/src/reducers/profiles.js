const initialState = {
id : " ",
name: " ",
age: " ",
bio: " ",
photo: " ",
  
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ACTION":
        const profiles_data = {
          id: action.payload.id,
          name: action.payload.name,
          age: action.payload.age,
          bio: action.payload.bio,
          photo: action.payload.photo,
        
        };
        return { ...state, profiles_data};

    default:
        return state;
  }
}


export default profiles
