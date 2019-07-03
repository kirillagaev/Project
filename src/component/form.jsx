import React from "react";
import NewInput from './ui/newInput';
import DropDown from './ui/dropDown';

const Form = props => {
    return (<div className='Form'>
        <h1>Поиск по ISO 3166-1 3-буквенный код страны.</h1>
        <h3>Например</h3>
        <p><img src='//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/22px-Flag_of_Afghanistan.svg.png'/>  Афганистан - AFG</p>
        <p><img src='//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/22px-Flag_of_Burundi.svg.png'/>  Бурунди - BDI</p>
        <p><img src='//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/22px-Flag_of_Estonia.svg.png'/>  Эстония - EST</p>
        <div className="FirtProject">
            <NewInput focus={props.focus} blur={props.blur} change={props.change} value={props.country}/>
            <DropDown value={props.value} country={props.country}/>
        </div>
    </div>)
};

export default Form;