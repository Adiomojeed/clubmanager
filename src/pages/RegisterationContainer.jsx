import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import * as ROUTES from "../constants/Routes";

const RegisterationContainer = ({ children }) => {
    return(
        <div className="container">
				<Link to={ROUTES.LANDING}>
					<div className="logo-reg">
						<img src={Logo} alt="" className="logo" />
						<h2 className="text-center text-primary">
							Club Manager
						</h2>
					</div>
				</Link>
                <div className="in"></div>
				<div className="row justify-content-center overflow vh-100 pos--rel">
					<div className="col-6 justify-content-center align-items-center pos--abs">
						{children}
					</div>
				</div>
			</div>
    )
}

export default RegisterationContainer;