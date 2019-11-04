import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear')

}

export const getProfileAction = (profiles) => ({
	type: "GET_PROFILE_ACTION",
	payload: {profiles}

})

export const getProfile = () => async (dispatch) => {
	await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/person').then((res) => {
		dispatch(getProfileAction(
			res.data.profiles.id,
			res.data.profiles.age,
			res.data.profiles.name,
			res.data.profiles.bio,
		))
	}).catch((err) => {
		console.log(err);
	})
};








