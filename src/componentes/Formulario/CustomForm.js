import React, { useState } from 'react';
import CustomFormField from './CustomFormField/CustomFormField';
import CustomSelect from './CustomSelect/CustomSelect';
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';
import CustomButton from './CustomButton/CustomButton';

const CustomForm = ({ formFields, onSubmit }) => {
    const [formState, setFormState] = useState({});

    const handleInputChange = (e, name) => {
        setFormState({
            ...formState,
            [name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e, name) => {
        setFormState({
            ...formState,
            [name]: e.target.checked,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(({ type, placeholder, name, options, label }) => (
                type === 'checkbox'
                ? <CustomCheckbox
                    key={name}
                    label={label}
                    checked={formState[name] || false}
                    onChange={(e) => handleInputChange(e, name)}
                />
                : type === 'select'
                ? <CustomSelect
                    key={name}
                    placeholder={placeholder}
                    options={options}
                    value={formState[name] || ''}
                    onChange={(e) => handleInputChange(e, name)}
                />
                : <CustomFormField
                    key={name}
                    type={type}
                    placeholder={placeholder}
                    value={formState[name] || ''}
                    onChange={(e) => handleInputChange(e, name)}
                />
            ))}
            <CustomButton type="submit" label="Enviar" />
        </form>
    );
};

export default CustomForm;
