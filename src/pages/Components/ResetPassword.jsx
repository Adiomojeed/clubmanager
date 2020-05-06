/** @format */

import React from "react";
import { withAlert } from 'react-alert'
import { withFirebase } from '../Firebase/index'

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
	error: null,
};

class ResetPasswordPage extends React.Component {
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
        const { passwordOne } = this.state;
		this.props.firebase.auth.currentUser
			.updatePassword(passwordOne)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
            })
            .then(() => {this.props.alert.show('Password changed successfully!')})
			.catch((error) => {
				this.setState({ error });
			});
		e.preventDefault();
	}

	render() {
		const { passwordOne, passwordTwo, error } = this.state;
		return (
			<div className="col justify-content-center align-items-center">
				<form onSubmit={this.onHandleSubmit}>
					<h3 className="text-center text-primary">Change Password</h3>
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
						<button className="btn btn-submit">Change Password</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withFirebase(withAlert()(ResetPasswordPage));
