import C from '../action/constants';

let initialState = {value: "1"};
 const mainReducer = (state = initialState, action) => {
     console.log(state);
    switch (action.type) {

        case C.ADD_DROPDOWN:
            return {
                ...state, value: action.value
            };
        default:
            return state
    }
};

 export default mainReducer;