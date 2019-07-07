import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'

class User extends Component {

	constructor(props){

		super(props);

		this.state = {

		 details : ''

		} 

	}

 

onChangeevent(e){

 this.props.history.push('/')

}

 

render() {

    var id = this.props.match.params.id
    
    var List = JSON.parse(localStorage.getItem('list'))
    
    var selectedRowIndex = List.findIndex(index => index.id == id )
    
    var selectedPerson = List[selectedRowIndex]
    
    return (
    
			<div className ={'details'}>
			
			<img onClick = {this.onChangeevent.bind(this)} src= 'https://cdn1.iconfinder.com/data/icons/ui-color/512/Untitled-21-512.png'/> 
			<h4>User Details</h4>
			
			<div className = {'data'}><span className = {'left'}>Company :</span> <span className = {"right"}>{selectedPerson.company_name}</span> </div>
			
			<br/>
			
			<div className = {'data'}><span className = {'left'}>City :</span> <span className = {"right"}>{selectedPerson.city}</span></div>
			
			<br/>
			<div className = {'data'}><span className = {'left'}>State :</span> <span className = {"right"}>{selectedPerson.state}</span> </div>

			<br/>

			<div className = {'data'}><span className = {'left'}> Zip :</span> <span className = {"right"}>{selectedPerson.zip}</span></div>

			<br/>

			<div className = {'data'}><span className = {'left'}>Email :</span> <span className = {"right"}>{selectedPerson.email}</span></div>

			<br/>
			<div className = {'data'}><span className = {'left'}> Web :</span> <span className = {"right"}>{selectedPerson.web}</span> </div>

			<br/>

			<div className = {'data'}><span className = {'left'}>Age: </span> <span className = {"right"}>{selectedPerson.age}</span> </div>

			</div>

     );

}

}

export default withRouter(User)