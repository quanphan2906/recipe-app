import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom"

import Home from "./container/Home";
import Recipe from "./container/Recipe";

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null
		}
	}
	changeSelected = data => {
		this.setState({
			selected: data,
		})
	}
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Route 
						exact 
						path="/" 
						render={ (routeProps) => <Home {...routeProps} changeSelected={this.changeSelected} /> }
					/>
					<Route 
						path="/recipes/:label" 
						render={ (routeProps) => <Recipe {...routeProps} selected={this.state.selected}/> }
					/>
				</BrowserRouter>
			</div>
		)
	}
}
