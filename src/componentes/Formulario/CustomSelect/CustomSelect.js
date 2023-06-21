import React from 'react';
import './CustomSelect.css';

const CustomSelect = ({ placeholder, options, value, onChange }) => (
    <div className={`custom-select ${value ? 'filled' : ''}`}>
        <select value={value} onChange={onChange} required>
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
        <label>{placeholder}</label>
    </div>
);

export default CustomSelect;
