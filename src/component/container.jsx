import React from "react";
import {connect} from 'react-redux';
import Form from '../component/form'
import {displayDropDown, removeDropDown, clearCountry} from '../action/action'
import {searchCountry} from '../thunk/thunk'


const mapStateToProps = state => {
    return {
        country: state.country,
        value: state.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        focus: ()=>{
            dispatch(displayDropDown())
            },
        blur: ()=>{
            dispatch(removeDropDown())
        },
        change: (e)=>{
            if(e.target.value.length > 2) {searchCountry(e.target.value, dispatch); console.log(e.target.value);}
            else if(e.target.value.length<=1){dispatch(clearCountry())};
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Form);