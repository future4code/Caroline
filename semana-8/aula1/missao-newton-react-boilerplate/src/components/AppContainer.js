import React from 'react'
import CustomizedInputBase from './input'
import InteractiveList from './lista'
import ContainedButtons from './botoes.js'
import styled from "styled-components";
//import meuContainerTasks from './cardTasks'

const StyledDiv = styled.div `
	margin-left: 55vh;
	margin-top: 10vh;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<StyledDiv>
				<CustomizedInputBase/>
				<InteractiveList />
				<ContainedButtons />
			</StyledDiv>
		)
	}
}
