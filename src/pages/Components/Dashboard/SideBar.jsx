/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { withFirebase } from '../../Firebase/index'
import Avatar from "../../../assets/images/male.png";
import SignOut from './SignOut'

class SideBar extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			user: []
		}
	}

	componentDidMount() {
		this.props.firebase.auth.onAuthStateChanged((authUser) =>
			this.props.firebase.db
				.ref(`users/${authUser.uid}`)
				.on("value", (snapshot) => {
					const usersObject = snapshot.val();
					this.setState({ user: usersObject});
				})
		);
	}

	render () {
		const {user} = this.state
		return (
			<div className="siderow vh-100">
				<div className="close">
					<i className="fas fa-times text-light" id="close"></i>
				</div>
				<div className="avatar-block">
					<div>
						<img src={Avatar} className="avatar" alt="" />
					</div>
					<h5 className="text-light text-center">
						DSC {user.name}
					</h5>
					<p>{user.email}</p>
					<p><i className="fas fa-flag"></i> {user.country}</p>
				</div>
				<div className="nav-list">
					<div className="nav-item">
						<NavLink to="/dashboard" activeClassName="nav-it">
							<p className="nav-text">
								<i className="fas fa-home sidebar__icon"></i>HOME
							</p>
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/dashboard/members" activeClassName="nav-it">
							<p className="nav-text">
								<i className="fas fa-users sidebar__icon"></i>
								MEMBERS
							</p>
						</NavLink>
					</div>
					<div className="nav-item">
						<NavLink to="/dashboard/addmember" activeClassName="nav-it">
							<p className="nav-text">
								<i className="fas fa-user-plus sidebar__icon"></i>
								ADD MEMBERS
							</p>
						</NavLink>
					</div>
				</div>
				<SignOut />
			</div>
		);
	}
};

export default withFirebase(SideBar);
