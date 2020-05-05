/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import ForgetPasswordPage from './ForgetPassword'
import DashboardPage from "./Dashboard";
import * as ROUTE from "../constants/Routes";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Route exact path={ROUTE.LANDING} component={LandingPage} />
					<Route path={ROUTE.SIGN_IN} component={SignInPage} />
					<Route path={ROUTE.SIGN_UP} component={SignUpPage} />
					<Route path={ROUTE.DASHBOARD} component={DashboardPage} />
					<Route path={ROUTE.PASSWORD_FORGET} component={ForgetPasswordPage} />
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
