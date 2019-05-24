import {createStore} from 'redux';
import stateData from '../../data/initialState';
import {classDropdown} from "../reducers/reducers";

const store = createStore(classDropdown, stateData);

export default store;