import axios from 'axios'
import profiles from './../reducers/profiles';

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear')

}

export const getProfileAction = (id,name,age,bio,photo) => ({
	type: "GET_PROFILE_ACTION",
	payload: {
		id: id,
		name:name,
		age: age,
		bio: bio,
		photo: photo,
    }
	
})

/*export const getProfile = () => async (dispatch, getState) => {
	const getNewProfile = getState().profiles.name;
	
	const response = await axios.get(
	  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/person",
	  {
		name: getNewProfile
	  }

	);
	const { name } = response.data.profiles
	dispatch(getProfileAction ( name, getNewProfile));
}*/


export const getProfile = () => async (dispatch, getState) => {
	await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/person').then((res) => {
		dispatch(getProfileAction(
			res.data.profiles.photo,
			res.data.profiles.name,
			res.data.profiles.age,
			res.data.profiles.bio,
			res.data.profiles.id


		))
	}).catch((err) => {
		console.log(err);
	})
};








