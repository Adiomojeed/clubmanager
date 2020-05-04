/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";
import { SignInLink } from "./SignIn";

const INITIAL_STATE = {
	name: "",
	email: "",
	country: "",
	passwordOne: "",
	passwordTwo: "",
	error: null,
};

class SignUpPage extends React.Component {
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
		const { name, email, country, passwordOne, passwordTwo } = this.state;
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
								<i className="fas fa-eye"></i>
							</div>
							<div className="form-group">
								<input
									type="password"
									value={passwordTwo}
									name="passwordTwo"
									onChange={this.onHandleChange}
									placeholder="Confirm Password"
								/>
								<i className="fas fa-eye"></i>
							</div>
							<div className="form-group">
								<button className="btn btn-submit">
									Get Started
								</button>
							</div>

							<SignInLink />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpPage;
