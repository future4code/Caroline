const initialState = {
    trips: [],
    trip: {},

  };
  
  export const trips = (state = initialState, action) => {
    switch(action.type) {
      case "GET_TRIPS":
     
        return { ...state, trips: action.payload.trips,};
      case "GET_TRIP_DETAIL":
    
      return { ...state, trip: action.payload.trip,};
      default:
        return state;
    }
  };
  
  export default trips ;
  /*
   const newTrip = {
          trips: action.payload.trips,
          
        };
        const newTrips = [...state.trips, newTrip];
      return { ...state, trips: newTrips};

  */