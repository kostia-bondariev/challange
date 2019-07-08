import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import productReducer from './pages/products/products.reducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    routerMiddleware(history),
    thunk
];

if (process.env.NODE_ENV === 'development' && typeof window != 'undefined') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const store = createStore(
        combineReducers({
            routing: routerReducer,
            product: productReducer
        }),
        initialState,
        composedEnhancers,
    );