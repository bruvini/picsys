import React from 'react';
import './CustomButton.css';

const CustomButton = ({ label, type = 'button', onClick }) => (
    <button type={type} className="custom-button" onClick={onClick}>
        {label}
    </button>
);

export default CustomButton;
