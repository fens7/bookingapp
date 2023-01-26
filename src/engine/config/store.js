// Core
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';
import createSagaMiddleware from "@redux-saga/core";
import { createReduxHistoryContext } from "redux-first-history";
// Engine
import destination from '../core/destination/slice'
import hotels from '../core/hotels/slice'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();


const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels,
        destination
    },
    middleware: () => [sagaMiddleware, routerMiddleware]
})

sagaMiddleware.run(rootSaga)


export default store;
export const history = createReduxHistory(store);