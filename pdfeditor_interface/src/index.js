import React, { createRef } from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import Toast from './component/toast/toast';
import './styles.css';

const appStore = createStore(reducer, composeWithDevTools(applyMiddleware()));

const toastRef = createRef();

render(
	<Toast toastRef={toastRef} />,
	document.getElementById('toast-container')
);

render(
	<Provider store={appStore}>
		<App />
	</Provider>,
	document.getElementById('app')
);

export const { showToast } = toastRef.current;
