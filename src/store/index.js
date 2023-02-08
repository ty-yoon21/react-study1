/**
 * Redux Store
 */

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import reducers from '../reducers';
import RootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware( {sagaMonitor});        //Create Saga Middleware 


export function configureStore(initialState) {

    const store = createStore(
        reducers,
        //initialState,
        compose(applyMiddleware(sagaMiddleware))
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        })
    }


    return store;
}