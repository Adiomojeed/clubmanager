/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @format */

import React from "react";
import { withAlert } from "react-alert";
import MoonLoader from "react-spinners/MoonLoader";
import { withFirebase } from "../Firebase/index";
import Male from "../../assets/images/male.png";
import Female from "../../assets/images/female.png";

class MembersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
		this.onHandleDelete = this.onHandleDelete.bind(this);
	}

	onHandleDelete(uid) {
		this.props.firebase.auth.onAuthStateChanged((authUser) => {
			this.props.firebase.db
				.ref(`members/${authUser.uid}/${uid}`)
				.remove();
		});
		this.props.alert.show("Member Deleted Successfully!");

		if (this.state.users.length === 1) {
			// eslint-disable-next-line no-restricted-globals
			location.reload()
		}

		
	}

	componentDidMount() {
		this.props.firebase.auth.onAuthStateChanged((authUser) =>
			this.props.firebase.db
				.ref(`members/${authUser.uid}`)
				.on("value", (snapshot) => {
					const usersObject = snapshot.val();
					const usersList = Object.keys(usersObject).map((x) => ({
						...usersObject[x],
						uid: x,
					}));
					this.setState({ users: usersList });
				})
		);
	}

	render() {
		const { users } = this.state;
		if (!users.length) {
			return (
				<div>
					<MoonLoader
					css="margin: 0 auto; margin-top: 20px"
					size={50}
					color={"#123abc"}
					loading={this.state.loading}
				/>
				<h6 className="ml members--hero">No Member found</h6>
				</div>
			);
		}

		return (
			<React.Fragment>
				<div className="col">
					<h4 className="ml members--hero">Members</h4>
				</div>
				<div className="row">
					{users.map((user) => (
						<div className="col-lg-4 col-6 py-2" key={user.name}>
							<div className="card shadow-success">
								<div className="header">
									{user.gender === "Male" ? (
										<img src={Male} alt="" />
									) : (
										<img src={Female} alt="" />
									)}
									<span id="open-modal">{user.name}</span>
									<span
										className="cancel"
										value={user.uid}
										onClick={() => {
											this.onHandleDelete(user.uid);
										}}
									>
										x
									</span>
								</div>
								<p>
									<i className="fas fa-envelope text-success"></i>{" "}
									{user.mail}
								</p>
								<div className="body">
									<p>
										<i className="fas fa-laptop-code"></i>{" "}
										{user.track}
									</p>
									<p>
										<i className="fas fa-mobile-alt text-success"></i>
										{user.phone}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default withFirebase(withAlert()(MembersPage));
