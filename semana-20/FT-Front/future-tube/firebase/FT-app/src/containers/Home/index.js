import React, { Component } from "react";
import styled from "styled-components";
import ApBar from './../../components/topo';
import TypographyMenu from "./../../components/menu"


const PageWrapper = styled.div``


class Home extends Component {
	constructor(props) {
	  super(props)
	
	}
  
	
	render() {
	  return (
		<PageWrapper>
			<ApBar />
			<TypographyMenu />

		</PageWrapper>
	  );
	}
  }
  
  
  export default Home