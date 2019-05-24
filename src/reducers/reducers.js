import C from '../action/constants';

export const classDropdown = (state={}, action) =>{
  switch (action.type) {
      case C.ADD_DROPDOWN:
          state.value=action.value;
          return state;
      default:
          return state
  }
};