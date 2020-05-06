/** @format */

import React from "react";
import { withFirebase } from '../Firebase/index'
import { withAuthorization } from "./Session/index";

class HomeBase extends React.Component {
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
					console.log(usersObject);
					const usersList = Object.keys(usersObject).map(
						(x) => usersObject[x]
					);
					console.log(usersList);
					this.setState({ users: usersList });
				})
		);
	}

	render() {
		return (
			<React.Fragment>
				<div className="col">
					<h5 className="ml">Welcome to your dashboard !!!</h5>
				</div>
				<div className="row">
					<div className="col-sm-6 col-4 py-2">
						<div className="benefits-right shadow">
							<i className="fab fa-accessible-icon text-error"></i>
							<h4>Accessibility</h4>
							<p>
								This application is easily accessible to any
								Local Branch ready to use it. Built to ease off
								stress of documentation.
							</p>
						</div>
					</div>
					<div className="col-sm-6 mx col-4 py-2">
						<div className="benefits-right shadow">
							<i className="fas fa-shield-alt text-success"></i>
							<h4>Security</h4>
							<p>
								Worry no more for the security of details of
								your members. We have got you covered to save
								your registers on the cloud.
							</p>
						</div>
					</div>
					<div className="col-sm-6 col-4 py-2">
						<div className="benefits-right shadow">
							<i className="fas fa-check-double text-warning"></i>
							<h4>Ease of Access</h4>
							<p>
								With just a click on your devices, you can add
								and view all members of your branch, their roles
								and details.
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const condition = (authUser) => authUser !== null;

const Home = withFirebase(HomeBase)

export default withAuthorization(condition)(Home);
