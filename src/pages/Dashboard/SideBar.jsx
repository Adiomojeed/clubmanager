/** @format */

import React from "react";
import Avatar from "../../assets/images/male.png";

const SideBar = () => {
	return (
		<div className="siderow vh-100">
			<div className="close">
				<i className="fas fa-times text-light" id="close"></i>
			</div>
			<div className="avatar-block">
				<div>
					<img src={Avatar} className="avatar" alt="" />
				</div>
				<h5 className="text-light text-center">
					DSC Kwara State University
				</h5>
			</div>
			<div className="nav-list">
				<div className="nav-item">
					<i className="fas fa-home sidebar__icon"></i>
					<p>HOME</p>
				</div>
				<div className="nav-item">
					<i className="fas fa-users sidebar__icon"></i>
					<p>MEMBERS</p>
				</div>
				<div className="nav-item">
					<i className="fas fa-user-plus sidebar__icon"></i>
					<p>ADD MEMBERS</p>
				</div>
				<div className="nav-item sign-out">
					<p>SIGN OUT</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
