import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 

import Home from './Home'

import UserDetails from './UserDetails'

 

class App extends React.Component{
    render(){
        return (

				<div>
					<Router>

						<Route exact path="/" component={Home} />

						<Route path="/user/:id" component={UserDetails} />

					</Router>

				</div>
        )
        
    }
}

 

export default App;