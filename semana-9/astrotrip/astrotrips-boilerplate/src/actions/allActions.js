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
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMwOTkxNjh9.GNN7SQnv-WqZCnrh6q1UobUcb4jBkugtFpa50cdFQcE"

	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trip/7a5J3xCpkBZdxmh5VU1t',
		{
			headers: {auth:token}
		}
	)
	console.log (response.data.trip)
		

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
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMwOTkxNjh9.GNN7SQnv-WqZCnrh6q1UobUcb4jBkugtFpa50cdFQcE"
    const dados = {
		name:name,
		planet:planet,
		date:date,
		description:description,
		durationInDays: durationInDays,
	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips', dados,
		{
			headers: {auth:token}
		}
	)
	dispatch((response.data.data))
	
	
}


/*
\"  name
    date
    description
	durationInDays
	*/

////////////////////////////////////////// POST Apply to Trip ///////////////////////////////////////////////////

export const applyToTrip= (id,name,country, applicationText, profession,age) => async (dispatch) => {
	//console.log( id, name,age, applicationText, profession, country)
    const dados = {
		id:id,
		name:name,
		country:country,
		applicationText:applicationText,
		profession:profession,
		age:age,
	}
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/caroline/trips/7a5J3xCpkBZdxmh5VU1t/apply', dados)
	
	dispatch((response.data.data))
}
