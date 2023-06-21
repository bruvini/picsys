import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ label, checked, onChange }) => (
    <div className="custom-checkbox">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <label>{label}</label>
    </div>
);

export default CustomCheckbox;
