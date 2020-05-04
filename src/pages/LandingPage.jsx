/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";

const LandingPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col vh-sm-80 hero-bg justify-content-center align-items-center">
					<div>
						<img src={Logo} alt="" className="logo" />
						<h1>DSC Club Manager</h1>
						<p>
							A monitoring application to help DSC Local Chapters
							monitor their clubs. It helps to keep track of the
							members, their role played and contributions.
						</p>
						<Link to={ROUTES.SIGN_UP}>
							<button className="btn btn-primary">
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<h2>BENEFITS</h2>
			</div>
			<div className="row">
				<div className="col-sm-12 col-6 offset-6 py-2">
					<div className="benefits-right">
						<i className="fab fa-accessible-icon"></i>
						<h4>Accessible</h4>
						<p>
							This application is easily accessible to any Local
							Branch ready to use it
						</p>
					</div>
				</div>
				<div className="col-sm-12 col-6 py-2">
					<div className="benefits-left">
						<i className="fab fa-accessible-icon"></i>
						<h4>Accessible</h4>
						<p>
							This application is easily accessible to any Local
							Branch ready to use it
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
