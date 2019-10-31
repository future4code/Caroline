import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear')
}

export const profiles = () => async (dispatch) => {
	await axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/person')
	
}

export const profiles = () => async (dispatch) => {
	await axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/matches')
	
}

export const profiles = () => async (dispatch) => {
	await axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/choose-person')
	
}