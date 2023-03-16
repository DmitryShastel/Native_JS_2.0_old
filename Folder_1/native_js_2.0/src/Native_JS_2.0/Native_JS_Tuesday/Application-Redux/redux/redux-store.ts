import {combineReducers, compose, createStore} from "redux";
import {cashReducer, customerReducer} from "../reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(reducers, composeWithDevTools())