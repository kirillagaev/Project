import C from '../action/constants';
import initialState from '../../data/initialState'

 const mainReducer = (state=initialState, action) => {
     console.log(state);
    switch (action.type) {

        case C.ADD_DROPDOWN:
            return {
                ...state, value: action.value
            };
        case C.LOAD_COUNTRY:
            return {
                ...state, country: action.country
            };
        case C.CLEAR_COUNTRY:
            return {
              ...state, country: action.country
            };
        case C.ERROR:
            return {
                ...state, country: action.country
        };
        default:
            return state
    }
};

 export default mainReducer;