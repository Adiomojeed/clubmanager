/** @format */

import React from "react";
import { withFirebase } from "../Firebase/index";
import Male from "../../assets/images/male.png";
import Female from "../../assets/images/female.png";

class MembersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			users: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		this.props.firebase.auth.onAuthStateChanged((authUser) =>
			this.props.firebase.db
				.ref(`members/${authUser.uid}`)
				.on("value", (snapshot) => {
					const usersObject = snapshot.val();
					const usersList = Object.keys(usersObject).map(
						(x) => usersObject[x]
					);
					this.setState({ users: usersList, loading: false });
				})
		);
	}

	render() {
        const { users } = this.state;
        if (!users.length) {
            return <h1>Loading...</h1>
        }
		return (
			<React.Fragment>
				<div className="col">
					<h4 className="ml">Members</h4>
				</div>
				<div className="row">
					{users.map((user) => (
						<div className="col-lg-4 col-6 py-2" key={user.name}>
							<div className="card shadow">
								<div>
                                    {user.gender === 'Male' ? <img src={Male} alt="" /> : <img src={Female} alt="" />}
									<span>{user.name}</span>
								</div>
								<p>
									<i className="fas fa-envelope"></i>:{" "}
									{user.mail}
								</p>
								<div>
									<p>
										<i className="fas fa-laptop-code"></i>:{" "}
										{user.track}
									</p>
									<p>
										<i className="fas fa-user"></i>:{" "}
										{user.gender}
									</p>
								</div>
								<p>
									<i className="fas fa-mobile-alt"></i>:
									{user.phone}
								</p>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default withFirebase(MembersPage);
