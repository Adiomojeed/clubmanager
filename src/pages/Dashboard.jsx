/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddMemberPage from "./Components/AddMember";
import ResetPasswordPage from "./Components/ResetPassword";
import MembersPage from './Components/Members'
import SideBar from "./Components/Dashboard/SideBar";
import TopNav from "./Components/Dashboard/TopNav";
import { withAuthorization } from "./Components/Session/index";

class DashboardPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<Router>
						<div className="row vh-100">
							<div className="col-3 fixed vh-100" id="nav">
								<SideBar />
							</div>
							<div className="col-9 vh-100">
								<TopNav />
								<Route
									exact
									path="/dashboard"
									component={Home}
								/>
								<Route
									path="/dashboard/addmember"
									component={AddMemberPage}
								/>
								<Route
									path="/dashboard/reset"
									component={ResetPasswordPage}
								/>
								<Route
									path="/dashboard/members"
									component={MembersPage}
								/>
							</div>
						</div>
					</Router>
				</div>
			</React.Fragment>
		);
	}
}

const condition = (authUser) => authUser !== null;

export default withAuthorization(condition)(DashboardPage);
