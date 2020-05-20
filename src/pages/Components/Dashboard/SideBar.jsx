/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { withFirebase } from "../../Firebase/index";
import Avatar from "../../../assets/images/male.png";
import SignOut from "./SignOut";

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
		};
	}

	componentDidMount() {
		this.props.firebase.auth.onAuthStateChanged((authUser) =>
			this.props.firebase.db
				.ref(`users/${authUser.uid}`)
				.on("value", (snapshot) => {
					const usersObject = snapshot.val();
					this.setState({ user: usersObject });
				})
		);
	}

	render() {
		const { user } = this.state;
		return (
			<div className="siderow">
				<div className="close">
					<i className="fas fa-times text-light" id="close"></i>
				</div>

				<div className="avatar-block">
					<div className="flex">
						<img src={Avatar} className="avatar" alt="" />
					</div>
					<h6 className="text-light text-center">DSC {user.name}</h6>
					<p>{user.email}</p>
					<p>
						<i className="fas fa-flag"></i> {user.country}
					</p>
				</div>
				<ul className="list">
					<li>
						<NavLink exact to="/dashboard" activeClassName="active">
							<i className="fas fa-home"></i>HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/members"
							activeClassName="active"
						>
							<i className="fas fa-users"></i>
							MEMBERS
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/addmember"
							activeClassName="active"
						>
							<i className="fas fa-user-plus"></i>
							ADD MEMBERS
						</NavLink>
					</li>
				</ul>

				<SignOut />
			</div>
		);
	}
}

export default withFirebase(SideBar);
