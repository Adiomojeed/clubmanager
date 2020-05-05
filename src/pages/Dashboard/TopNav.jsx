/** @format */

import React from "react";
import Logo from "../../assets/images/logo.png";

const TopNav = () => {
	return (
		<nav className="nav">
			
				<img src={Logo} className='top--logo' alt="" />
				<p className="text-primary">Club Manager</p>
			
			<div>
				<span>
					<i className="fas fa-cog"></i>
				</span>
				<i className="fas fa-stream open" id="open"></i>
			</div>
		</nav>
	);
};

export default TopNav;
