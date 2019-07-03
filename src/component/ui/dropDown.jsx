import React from "react";

const DropDown = ({value, country}) => {
    return (<div className={value ? "DropDown" : "DropDown_off"}>
        <div className='countryInfo'>
            {country}
        </div>
    </div>);
};

export default DropDown;

