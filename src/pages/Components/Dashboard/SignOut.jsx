/** @format */

import React from "react";
import { withFirebase } from "../../Firebase/index";

const SignOut = ({ firebase }) => {
	return (
		<button
			type="button"
			className="sign-out"
			onClick={() => {
				firebase.auth.signOut();
			}}
		>
			<p className="nav-text">SIGN OUT</p>
		</button>
	);
};

export default withFirebase(SignOut);
