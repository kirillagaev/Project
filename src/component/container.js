import list from './ui/list';
import NewInput from './ui/newInput';
import DropDown from './ui/dropDown';
import {addDropdown} from "../action/action";
import {connect} from 'react-redux';

export const AddNewInput = connect(
    null,
    dispatch => ({
        Focus(value){
            dispatch(addDropdown(value));
        },
        Blur(value){
            dispatch(addDropdown(value))
        },
    })
)(NewInput);

export const AddDropDown = connect(
    state => ({value: state.value})
)(DropDown);