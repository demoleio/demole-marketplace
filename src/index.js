import React from 'react';
import ReactDOM from 'react-dom';
import Home from './controllers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import "nouislider/distribute/nouislider.css";

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider autoDismiss={true} placement="bottom-center">
			<Router>
				<Switch>
					{/* <Route path="/users">
						<Users />
					</Route> */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root')
);