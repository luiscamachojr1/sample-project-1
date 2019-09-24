import React, { Component } from 'react';
import DataList from '../data/nairo.json';
//import './App.css';


class Profile extends Component {   
	render(){ 
	return(  
		<div >
		<h1>Hello World</h1>
		{DataList.map((bioDetails, index)=>{
			return <h1> {bioDetails.about}</h1>
		})}
		</div>
		);
    };
}
export default Profile
