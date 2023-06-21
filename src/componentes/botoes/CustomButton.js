import React from 'react';
import './CustomButton.css';

function CustomButton(props) {
    return (
        <button
            className="custom-button"
            type={props.type || "button"}
            onClick={props.onClick}
            style={props.buttonStyle}
        >
            {props.children}
        </button>
    );
}

export default CustomButton;
