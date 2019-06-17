import React from "react";
import DropDown from './ui/dropDown';
import {connect} from 'react-redux';

/**
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
*/

const AddDropDown = () => {
    return (<DropDown />)
};

const mapStateToProps = state => {
    return {
        value: state.value
    };
};

export default connect(
  mapStateToProps
)(AddDropDown);
