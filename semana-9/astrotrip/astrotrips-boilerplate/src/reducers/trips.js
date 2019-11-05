const initialState = {
    trips: [],

  };
  
  export const trips = (state = initialState, action) => {
    switch(action.type) {
      case "GET_TRIPS":
        const newTrip = {
          trips: action.payload.trips,
          
        };
        const newTrips = [...state.trips, newTrip];
      return { ...state, trips: newTrips};
      default:
        return state;
    }
  };
  
  export default trips ;
  