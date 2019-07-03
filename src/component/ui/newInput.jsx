import React from "react";

const NewInput = ({focus, blur, change}) =>{
    return (
        <input type='text' className="NewInput" placeholder="Введите код страны" maxLength='3'
               onFocus={()=>focus()} onBlur={()=>blur()}
               onChange={(e)=>change(e)}/>
    );
};

export default NewInput