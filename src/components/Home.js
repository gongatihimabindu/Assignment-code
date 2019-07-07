import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 
import Header from './Header'
import Container from './Container'

class Home extends Component {

	render() {

		return (

			<div>
				<Header/>
			    <Container/>
			</div>

		);

	}

}

export default Home;