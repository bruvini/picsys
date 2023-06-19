import React from 'react';
import './CustomInput.css';

function CustomInput(props) {
    return (
        <input
            className="custom-input"
            type={props.type || "text"}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default CustomInput;
