import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history, store } from './store';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './pages';
import 'antd/dist/antd.css';
import './assets/site.css'
import CreateEditContainer from './pages/edit';

window.render = () => {
    const target = document.querySelector('#root');
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path='/' component={HomeContainer} />
					<Route exact path='/product/:id?' component={CreateEditContainer} />
				</Switch>
			</ConnectedRouter>
		</Provider>,
		target
	);
}
