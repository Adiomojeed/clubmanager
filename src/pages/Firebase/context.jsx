/** @format */

import React from "react";

const FirebaseContext = React.createContext();

export const withFirebase = (Component) => (props) => {
	return (
		<FirebaseContext.Consumer>
			{(firebase) => <Component {...props} firebase={firebase} />}
		</FirebaseContext.Consumer>
	);
};

export default FirebaseContext;
