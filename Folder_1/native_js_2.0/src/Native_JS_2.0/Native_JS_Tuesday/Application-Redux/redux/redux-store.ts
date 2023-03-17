import {combineReducers, createStore} from "redux";
import {cashReducer, customerReducer, StoreType} from "../reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store: StoreType = createStore(reducers, composeWithDevTools())