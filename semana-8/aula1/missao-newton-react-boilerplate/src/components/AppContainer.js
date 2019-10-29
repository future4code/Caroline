import React from 'react'
//import Inputs from './input';
import CustomizedInputBase from './input'
import InteractiveList from './lista';
import ContainedButtons from './botoes.js'


export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
			<CustomizedInputBase/>
			<InteractiveList />
			<ContainedButtons />
			</div>
		)
	}
}
//<Inputs />