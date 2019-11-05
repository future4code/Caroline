import axios from "axios";


const getTripsAction = () => ({
	type: "GET_TRIPS",
	payload: {
		trips:trips,
	}
})

export const getTrips = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips')

	dispatch(getTripsAction(response.data.trips))
}

/*id,name,description,planet,durationIndays,date

 "id": "0aQ9retlt9zxpeo40G2M",
      "name": "Multi luau em Jupiter",
      "description": "Noite mágica, com vista para as 69 luas de Jupiter",
      "planet": "Jupiter",
      "durationInDays": 540,
      "date": "21/12/20"

*/