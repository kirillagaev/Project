import {createStore, applyMiddleware, compose} from 'redux';
import mainReducer from "../reducers/reducers";
import thunk from "redux-thunk";
import initialState from "../../data/initialState"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;