import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  padding: 5px;
  margin-right: 40px;
`

const TypographyStyled = styled(Typography)`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`
const H2 = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
`

class ApBar extends React.Component {
	constructor (props){
		super(props)
	}

render() {
    return (
			<AppBar position="static" color="primary">
				<ToolbarStyled>
					<Button>
					</Button>
					<TypographyStyled >
						<H2>FutureTube</H2>
					</TypographyStyled>
				</ToolbarStyled>
			</AppBar>
	)
}
}
export default ApBar