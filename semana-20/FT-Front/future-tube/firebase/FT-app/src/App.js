import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'
import { render } from 'react-dom'
import * as firebase from "firebase/app";

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme();


class App extends React.Component {
constructor(props){
	super(props)

	this.state ={
		cadastros: []
	}
}

componentDidMount(){
	this.getSignUp()
};

async getSignUp() {
const signups = await firebase.firestore().collection(collectionPath, "cadastro").get()

const cadastros = signups.docs.map(doc => doc.data())
this.setState(status, {cadastros})
console.log(cadastros)
}
render()	{
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<AppContainer />
			</MuiThemeProvider>
		</JssProvider>
		)
	}
}

export default App
