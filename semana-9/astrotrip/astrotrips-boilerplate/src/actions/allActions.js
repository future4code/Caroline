import axios from "axios";

////////////////////////////////////////// Get Trips ///////////////////////////////////////////////////

 const getTripsAction = (trips) => ({
	type: "GET_TRIPS",
	payload: {
		trips:trips,
	}
})

export const getTrips = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips')

	dispatch(getTripsAction(response.data.trips))
}

////////////////////////////////////////// Get Trip Detail ///////////////////////////////////////////////////7a5J3xCpkBZdxmh5VU1t

export const getTripDetailAction = (trip) => ({
	type: "GET_TRIP_DETAIL",
	payload: {
		trip:trip,
	}
})

export const getTripDetail = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trip/7a5J3xCpkBZdxmh5VU1t')

	dispatch(getTripDetailAction (response.data.trip))
}