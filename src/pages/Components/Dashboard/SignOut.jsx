/** @format */

import React from "react";
import { withFirebase } from "../../Firebase/index";

const SignOut = ({ firebase }) => {
	return (
		<React.Fragment>
			<button type="button" className="sign-out" id="open-modal">
				SIGN OUT
			</button>
			<div id="myModal" className="myModal">
				<div className="modal-content">
					<div className="headers">
						<h4>Sign Out?</h4>
					</div>
					<div className="bodys">
						<button
							className="footer"
							onClick={() => {
								firebase.auth.signOut();
							}}
						>
							Yes
						</button>
						<button className="negate">No</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withFirebase(SignOut);
