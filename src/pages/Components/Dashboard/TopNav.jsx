/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

const TopNav = () => {
	return (
		<nav className="nav">
			<img src={Logo} className="top--logo" alt="" />
			<p className="text-primary">Club Manager</p>

			<div>
				<span>
					<NavLink to="/dashboard/reset">
						<i className="fas fa-cog"></i>
					</NavLink>
				</span>
				<i className="fas fa-stream" id="open"></i>
			</div>
		</nav>
	);
};

export default TopNav;
