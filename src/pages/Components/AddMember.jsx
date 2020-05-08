/** @format */

import React from "react";
import { withAlert } from "react-alert";
import { Entropy } from "entropy-string";
import { withAuthorization } from "./Session/index";

const INITIAL_STATE = {
	name: "",
	track: "",
	mail: "",
	phone: "",
	gender: "",
	error: null,
};

class AddMemberPage extends React.Component {
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
		const { name, track, mail, phone, gender } = this.state;
		const entropy = new Entropy();
		const memberID = entropy.string();
		this.props.firebase.auth.onAuthStateChanged((authUser) =>
			this.props.firebase.db
				.ref(`members/${authUser.uid}/${memberID}`)
				.set({ name, track, mail, phone, gender })
		);

		this.props.alert.show("Member Added Successfully!");

		this.setState({ ...INITIAL_STATE });
		e.preventDefault();
	}

	render() {
		const { name, track, mail, phone, gender } = this.state;
		const isInvalid =
			name === "" ||
			track === "" ||
			mail === "" ||
			phone === "" ||
			gender === "";
		return (
			<div className="col justify-content-center align-items-center">
				<form onSubmit={this.onHandleSubmit}>
					<h3 className="text-center text-primary">Add Member</h3>
					<div className="form-group">
						<small>Ensure you fill all fields</small>
					</div>
					<div className="form-group">
						<input
							type="text"
							value={name}
							name="name"
							onChange={this.onHandleChange}
							placeholder="Member's Name"
						/>
						<i className="fas fa-user-tie"></i>
					</div>

					<div className="form-group">
						<select
							name="track"
							id="track"
							value={track}
							onChange={this.onHandleChange}
							onBlur={this.onHandleChange}
						>
							<option value="">Track</option>
							<option value="Web">Web</option>
							<option value="Design">Design</option>
							<option value="IOT">IOT</option>
						</select>
						<i className="fas fa-laptop-code"></i>
					</div>
					<div className="form-group">
						<input
							type="email"
							value={mail}
							name="mail"
							onChange={this.onHandleChange}
							placeholder="mail"
						/>
						<i className="fas fa-envelope"></i>
					</div>
					<div className="form-group">
						<select
							name="gender"
							id="gender"
							value={gender}
							onChange={this.onHandleChange}
							onBlur={this.onHandleChange}
						>
							<option value="">Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
						<i className="fas fa-user"></i>
					</div>
					<div className="form-group">
						<input
							type="tel"
							value={phone}
							name="phone"
							onChange={this.onHandleChange}
							placeholder="phone"
						/>
						<i className="fas fa-mobile-alt"></i>
					</div>
					<div className="form-group">
						<button className="btn btn-submit" disabled={isInvalid}>
							Add Member
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const condition = (authUser) => authUser !== null;

export default withAuthorization(condition)(withAlert()(AddMemberPage));
