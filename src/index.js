import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Gives access to the stores and those reducers we're going to write
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Getting access to redux inside the app
import { store, persistor } from './redux/store';


import './index.css';
import App from './App';

ReactDOM.render(
	// This Provider component is the parent of everything inside the app
	// After including persist, we now wrap our app inside the PersistGate, where we now pass our
	// persistor - that we wrote inside of our redux store - into the PersistGate (the persisted
	// version of our store)
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
