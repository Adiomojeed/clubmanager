/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";

const LandingPage = () => {
	return (
		<div className="container">
			<div className="row hero-bg">
				<div className="col col-md-8 offset-md-2 col-lg-6 offset-lg-3 vh-100 d-flex justify-content-center align-items-center">
					<div>
						<div className="flex">
							<img src={Logo} alt="" className="logo" />
						</div>
						<h1 className="text-center">DSC Club Manager</h1>
						<h5 className="text-center font-weight-normal px-2">
							A monitoring application to help DSC Local Chapters
							monitor their clubs. It helps to keep track of the
							members, their role played and contributions.
						</h5>
						<Link to={ROUTES.SIGN_UP}>
							<div className="flex w-100">
								<button className="btn btn-sm tn-primary">
									Get Started
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
