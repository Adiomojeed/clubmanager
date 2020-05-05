/** @format */

import React from "react";
import SideBar from "./Dashboard/SideBar";
import TopNav from "./Dashboard/TopNav";

class DashboardPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-3 fixed vh-100" id="nav">
							<SideBar />
						</div>
						<div className="col-9 vh-100">
							<TopNav />
							<div className="col">
								<h4 className="ml">
									Welcome to your dashboard !!!
								</h4>
							</div>
							<div className="row">
								<div className="col-sm-12 col-4 py-2">
									<div className="benefits-right shadow">
										<i className="fab fa-accessible-icon text-error"></i>
										<h4>Accessibility</h4>
										<p>
											This application is easily
											accessible to any Local Branch ready
											to use it. Built to ease off stress
											of documentation.
										</p>
									</div>
								</div>
								<div className="col-sm-12 mx col-4 py-2">
									<div className="benefits-right shadow">
										<i className="fas fa-shield-alt text-success"></i>
										<h4>Security</h4>
										<p>
											Worry no more for the security of
											details of your members. We have got
											you covered to save your registers
											on the cloud.
										</p>
									</div>
								</div>
								<div className="col-sm-12 col-4 py-2">
									<div className="benefits-right shadow">
										<i className="fas fa-check-double text-warning"></i>
										<h4>Ease of Access</h4>
										<p>
											With just a click on your devices,
											you can add and view all members of
											your branch, their roles and
											details.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default DashboardPage;
