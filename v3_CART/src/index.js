import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Gives access to the stores and those reducers we're going to write

// Getting access to redux inside the app
import store from './redux/store';


import './index.css';
import App from './App';

ReactDOM.render(
	// This Provider component is the parent of everything inside the app
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
