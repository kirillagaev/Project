import PropTypes from "prop-types";

const NewInput = ({Focus=f=>f, Blur=f=>f}) =>{
    return (
        <input type='text' className="NewInput" placeholder="Найти пользователя" defaultValue='' onFocus={()=>Focus(true)} onBlur={()=>Blur(false)}/>
    );
};

NewInput.propsTypes={
  Focus: PropTypes.func,
  Blur: PropTypes.func,
};

export default NewInput