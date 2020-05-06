/** @format */

import React from "react";
import { withRouter } from "react-router-dom";
import { withAlert } from "react-alert";
import RegisterationContainer from "./RegisterationContainer";
import * as ROUTES from "../constants/Routes";
import { SignInLink } from "./SignIn";
import { withFirebase } from "./Firebase/index";

const INITIAL_STATE = {
	name: "",
	email: "",
	country: "",
	passwordOne: "",
	passwordTwo: "",
	error: null,
};

class SignUpFormBase extends React.Component {
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
		const { email, passwordOne, name, country } = this.state;
		this.props.firebase.auth
			.createUserWithEmailAndPassword(email, passwordOne)
			.then((authUser) => {
				this.props.firebase.db
					.ref(`users/${authUser.user.uid}`)
					.set({ name, country, email });
				this.props.firebase.db
					.ref(`members/${authUser.user.uid}`)
					//.set({ name, country, email });
			})
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.DASHBOARD);
			})
			.then(() => {
				location.reload();
			})
			.then(() => {
				this.props.alert.show("Successfully Signed Up!");
			})
			.catch((error) => this.setState({ error }));
		e.preventDefault();
	}

	render() {
		const {
			name,
			email,
			country,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;
		const isInvalid =
			name === "" ||
			email === "" ||
			passwordOne === "" ||
			passwordOne !== passwordTwo ||
			country === "";
		return (
			<RegisterationContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h2 className="text-center text-primary">
						Create an Account
					</h2>
					<div className="form-group">
						<input
							type="text"
							value={name}
							name="name"
							onChange={this.onHandleChange}
							placeholder="Chapter's Name"
						/>
						<i className="fas fa-user-tie"></i>
					</div>
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
							type="text"
							value={country}
							name="country"
							onChange={this.onHandleChange}
							placeholder="Country"
						/>
						<i className="fas fa-map-marker-alt"></i>
					</div>
					<div className="form-group">
						<input
							type="password"
							value={passwordOne}
							name="passwordOne"
							onChange={this.onHandleChange}
							placeholder="Password"
						/>
						<i className="fas fa-key"></i>
					</div>
					<div className="form-group">
						<input
							type="password"
							value={passwordTwo}
							name="passwordTwo"
							onChange={this.onHandleChange}
							placeholder="Confirm Password"
						/>
						<i className="fas fa-key"></i>
					</div>
					<div className="form-group">
						{error && <p className="error">{error.message}</p>}
					</div>
					<div className="form-group">
						<button className="btn btn-submit" disabled={isInvalid}>
							Get Started
						</button>
					</div>
					<SignInLink />
				</form>
			</RegisterationContainer>
		);
	}
}

const SignUpPage = withRouter(withFirebase(withAlert()(SignUpFormBase)));

export default SignUpPage;
