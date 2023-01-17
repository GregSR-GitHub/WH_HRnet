/**
 * Display an input and a label in a form
 * @return { HTMLElement }
 */

import './form_input.css';

  function FormInput({name, label, type}) {
    return (
        <div className="create-employee-input-wrapper">
            {label&&<label htmlFor={name}>{label}</label>}
            <input id={name} type={type}  className="create-employee-input"/>
        </div>
    );
 }
 
 export default FormInput;