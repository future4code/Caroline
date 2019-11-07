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

////////////////////////////////////////// POST Create Trip ///////////////////////////////////////////////////
/*const createTripsAction = (name,planet,date,description,durationInDays) => ({
	type: "CREATE_TRIPS",
	payload: {
		name:name,
		planet:planet,
		date:date,
		description:description,
		durationInDays: durationInDays,
	}
})*/

export const createTrips = (name,planet,date,description,durationInDays) => async (dispatch) => {
    const dados = {
		name:name,
		planet:planet,
		date:date,
		description:description,
		durationInDays: durationInDays,
	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips', dados)
	dispatch((response.data.data))
}


/*
\"  name
    date
    description
	durationInDays
	*/

////////////////////////////////////////// POST Apply to Trip ///////////////////////////////////////////////////

export const applyToTrip= (name,age, applicationText, profession, country) => async (dispatch) => {
    const dados = {
		name:name,
		age:age,
		applicationText:applicationText,
		profession:profession,
		country:country,
	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips/7a5J3xCpkBZdxmh5VU1t/apply', dados)
	dispatch((response.data.data))
}
