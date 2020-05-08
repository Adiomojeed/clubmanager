/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import { withFirebase } from "./Firebase/index";
import { ResetLink } from "./Components/ForgetPassword";
import * as ROUTES from "../constants/Routes";
import RegisterationContainer from "./RegisterationContainer";

const INITIAL_STATE = {
	email: "",
	password: "",
	error: null,
};

class SignInFormbase extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_STATE,
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
	}

	onHandleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onHandleSubmit(e) {
		const { email, password } = this.state;
		this.props.firebase.auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.DASHBOARD);
			})
			.then(() => { location.reload() })
			.then(() => {setTimeout(this.props.alert.show('Successfully Signed in!'), 5000)})
			.catch((error) => this.setState({ error }));
		e.preventDefault();
	}

	render() {
		const { email, password, error } = this.state;
		const isInvalid = error === "" || password === "";
		return (
			<RegisterationContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h2 className="text-center text-primary">Login</h2>
					<div className="form-group">
						<input
							type="email"
							value={email}
							name="email"
							onChange={this.onHandleChange}
							placeholder="Email Address"
						/>
						<i className="fas fa-envelope"></i>
					</div>

					<div className="form-group">
						<input
							type="password"
							value={password}
							name="password"
							onChange={this.onHandleChange}
							placeholder="Password"
						/>
						<i className="fas fa-key"></i>
					</div>
					<div className="form-group">
						{error && <p className="error">{error.message}</p>}
					</div>
					<div className="form-group">
						<button
							className="btn btn-submit"
							type="submit"
							disabled={isInvalid}
						>
							Sign In <i className="fas fa-sign-in-alt"></i>
						</button>
					</div>
					<ResetLink />
				</form>
			</RegisterationContainer>
		);
	}
}

const SignInLink = () => {
	return (
		<p className="signlink">
			Already have an account?{" "}
			<Link to={ROUTES.SIGN_IN}>
				<a>Sign In</a>
			</Link>
		</p>
	);
};

export { SignInLink };

const SignInPage = withRouter(withFirebase(withAlert()(SignInFormbase)));

export default SignInPage;
