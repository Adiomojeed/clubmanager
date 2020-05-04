/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";

const INITIAL_STATE = {
	email: "",
	passwordOne: "",
	error: null,
};

class SignInPage extends React.Component {
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
		e.preventDefault();
	}

	render() {
		const { email, passwordOne } = this.state;
		return (
			<div className="container vh-100">
				<Link to={ROUTES.LANDING}>
					<div className="logo-reg">
						<img src={Logo} alt="" className="logo" />
						<h2 className="text-center text-primary">
							Club Manager
						</h2>
					</div>
				</Link>
				<div className="row justify-content-center overflow">
					<div className="in"></div>
					<div className="col-6 justify-content-center align-items-center">
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
									value={passwordOne}
									name="passwordOne"
									onChange={this.onHandleChange}
									placeholder="Password"
								/>
								<i className="fas fa-eye"></i>
							</div>
							<div className="form-group">
								<button className="btn btn-submit">
									Sign In{" "}
									<i className="fas fa-sign-in-alt"></i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
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

export default SignInPage;
