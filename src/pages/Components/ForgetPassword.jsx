/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { withAlert } from 'react-alert'
import * as ROUTES from "../../constants/Routes";
import { withFirebase } from '../Firebase/index'
import RegisterationContainer from "../RegisterationContainer";

const INITIAL_STATE = {
	email: "",
	error: null,
};

class ForgetPasswordPage extends React.Component {
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
		const { email } = this.state;
		this.props.firebase.auth
			.sendPasswordResetEmail(email)
			.then(() => this.setState({ ...INITIAL_STATE }))
			.then(() => {this.props.alert.show('Reset Link sent successfully!')})
			.catch((error) => this.setState({ error }));
		e.preventDefault();
	}

	render() {
		const { email, error } = this.state;
		return (
			<RegisterationContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h2 className="text-center text-primary">Reset Password</h2>
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
						{error && <p className="error">{error.message}</p>}
					</div>
					<div className="form-group">
						<button className="btn btn-submit">
							Send me a Reset Link{" "}
						</button>
					</div>
				</form>
			</RegisterationContainer>
		);
	}
}

const ResetLink = () => {
	return (
		<p className="signlink">
			Password Forgotten?{" "}
			<Link to={ROUTES.PASSWORD_FORGET}>
				<a>Click Here</a>
			</Link>
		</p>
	);
};

export { ResetLink };

export default withFirebase(withAlert()(ForgetPasswordPage));
