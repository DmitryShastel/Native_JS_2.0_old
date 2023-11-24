import {combineReducers, createStore} from "redux";
import {storeReducer, StoreType} from "./reducers/storeReducers2";

const reducers = combineReducers({
    storeReducer: storeReducer,
});

export const store: StoreType = createStore(reducers);