import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import store from './store';
import UserSignup from './Components/UserSignup';
import UserLogin from './Components/UserLogin';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class App extends React.Component{
	render(){
		return(
			<Router>
				<Provider store={store}>
					<div>
						<Route exact path="/" render={() => (
    						<Redirect to="/login"/>)}/>
						<Route exact path="/login" component={UserLogin}/>
						<Route exact path="/signup" component={UserSignup}/>
						<Route exact path="/home" component={Home}/>
					</div>
				</Provider>
			</Router>
			);
	}
}

render(<App/>,window.document.getElementById("app"));