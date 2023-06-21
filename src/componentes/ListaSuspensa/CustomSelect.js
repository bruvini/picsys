import React from 'react';
import './CustomSelect.css';

function CustomSelect(props) {
    return (
        <select
            className="custom-select"
            value={props.value}
            onChange={props.onChange}
        >
            {props.options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default CustomSelect;