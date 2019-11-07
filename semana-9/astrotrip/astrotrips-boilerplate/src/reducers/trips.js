const initialState = {
    trips: [],
    trip: {},
    dados:[],

  };
  
  export const trips = (state = initialState, action) => {
    switch(action.type) {
      case "GET_TRIPS":
        return { ...state, trips: action.payload.trips,};

      case "GET_TRIP_DETAIL":
        return { ...state, trip: action.payload.trip,};

      /*case "CREATE_TRIPS":
          const newCreateTrip = {
            name: action.payload.name,
            date: action.payload.date,
            planet:action.payload.planet,
            description: action.payload.description,
            durationInDays: action.payload.durationInDays
          };
          const newCreateTrips = [...state.dados, newCreateTrip ];
          return { ...state, createTrip: newCreateTrips };  */
        
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