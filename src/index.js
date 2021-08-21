import React from 'react';
import ReactDOM from 'react-dom';
import Home from './controllers/Home';
import { ToastProvider } from 'react-toast-notifications';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import "nouislider/distribute/nouislider.css";
import 'antd/dist/antd.css';
import GlobalStyle from "./components/GlobalStyle"
import Detail from './controllers/Detail';

ReactDOM.render(
	<React.StrictMode>
		<ToastProvider autoDismiss={true} placement="bottom-center">
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path="/detail/:id">
						<Detail/>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root')
);