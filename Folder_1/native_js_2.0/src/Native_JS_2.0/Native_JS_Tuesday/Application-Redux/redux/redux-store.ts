import {combineReducers, createStore} from "redux";
import {cashReducer, customerReducer} from "../reducers/reducers";


const reducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(reducers)