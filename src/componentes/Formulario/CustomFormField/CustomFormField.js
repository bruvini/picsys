import React from 'react';
import './CustomFormField.css';

const CustomFormField = ({ type, placeholder, value, onChange }) => (
    <div className={`custom-form-field ${value ? 'filled' : ''}`}>
        <input type={type} value={value} onChange={onChange} required />
        <label>{placeholder}</label>
    </div>
);

export default CustomFormField;
