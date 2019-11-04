import axios from 'axios'
import profiles from './../reducers/profiles';


/***********************************************GET PROFILE********************************************************* */
const getProfileAction = (id,name,age,bio,photo) => ({
	type: "GET_PROFILE_ACTION",
	payload: {
		id: id,
		name:name,
		age: age,
		bio: bio,
		photo: photo,
    }
	
})

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

/***********************************************GET MATCHES ********************************************************* */
const getMatchesAction = ( matches)=> ({
	type: "GET_MATCH_ACTION",
	payload: {
		matches: matches
    }
	
})

export const getMatches = () => async (dispatch, getState) => {
	await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/matches').then((res) => {
		dispatch(getMatchesAction(
		res.data.profiles.matches
		))
	}).catch((err) => {
		console.log(err);
	})
};

/***********************************************CHOOSE PERSON********************************************************* */

const choosePersonAction = (id,choice )=> ({
	type: "CHOOSE_PERSON",
	payload: {
		id:id,
		choice:choice
    }
	
})

export const choosePerson = () => async (dispatch, getState) => {
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/choose-person').then((res) => {
		dispatch(choosePersonAction(
		
		))
	}).catch((err) => {
		console.log(err);
	})
};
/***********************************************CLEAR******************************************************** */

const clearAction = (id) => ({
	type: "CLEAT_ACTION",
	payload: {
		id: id,
    }
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear').then((res) => {
		dispatch(clearAction(
			//res.data.profiles.id
		))
	}).catch((err) => {
		console.log(err);
	})
};



