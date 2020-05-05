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
			<div className="row mb">
				<div className="col-sm-12 col-4 py-2">
					<div className="benefits-right shadow shadow-lg-none">
						<i className="fab fa-accessible-icon text-error"></i>
						<h4>Accessibility</h4>
						<p>
							This application is easily accessible to any Local
							Branch ready to use it. Built to ease off stress of
							documentation.
						</p>
					</div>
				</div>
				<div className="col-sm-12 col-4 py-2">
					<div className="benefits-right shadow shadow-lg-none">
						<i className="fas fa-shield-alt text-success"></i>
						<h4>Security</h4>
						<p>
							Worry no more for the security of details of your
							members. We have got you covered to save your
							registers on the cloud.
						</p>
					</div>
				</div>
				<div className="col-sm-12 col-4 py-2">
					<div className="benefits-right shadow shadow-lg-none">
						<i className="fas fa-check-double text-warning"></i>
						<h4>Ease of Access</h4>
						<p>
							With just a click on your devices, you can add and
							view all members of your branch, their roles and
							details.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col mb justify-content-center">
					<small className='text-center'>DSC Kwara State University &reg; </small>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
