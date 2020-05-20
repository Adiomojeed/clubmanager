/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

const TopNav = () => {
	return (
		<nav className="nav">
			<img src={Logo} alt="" />
			<h5 className="text-primary">Club Manager</h5>
			<NavLink to="/dashboard/reset">
				<i className="fas fa-cog"></i>
			</NavLink>
			<i className="fas fa-stream" id="open"></i>
		</nav>
	);
};

export default TopNav;
