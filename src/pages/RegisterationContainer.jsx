/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";

const RegisterationContainer = ({ children }) => {
	return (
		<div className="container">
			<Link to={ROUTES.LANDING}>
				<div className="logo__reg">
					<img src={Logo} alt="" />
					<h5 className="text-primary">Club Manager</h5>
				</div>
			</Link>
			<div className="row justify-content-center align-items-center vh-100">
				<div className="col col-md-8 col-lg-6 col-xl-5 px-2">
					{children}
				</div>
			</div>
		</div>
	);
};

export default RegisterationContainer;