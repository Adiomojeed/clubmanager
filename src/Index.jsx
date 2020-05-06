/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/app.scss";
import {
	transitions,
	positions,
	Provider as AlertProvider,
	types,
} from "react-alert";
import App from "./pages/App";
import { FirebaseContext, Firebase, auth, db } from "./pages/Firebase/index";

const AlertTemplate = ({ message }) => {
	return (
		<div className="alert">
			<p>{message}</p>
		</div>
	);
};

const options = {
	position: positions.TOP_RIGHT,
	type: types.SUCCESS,
	transition: transitions.FADE,
	timeout: 3000,
	offset: "30px",
};

const NewApp = () => (
	<AlertProvider template={AlertTemplate} {...options}>
		<App />
	</AlertProvider>
);

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase(auth, db)}>
		<NewApp />
	</FirebaseContext.Provider>,
	document.querySelector("#root")
);
