import React from 'react';

interface FormInputProps{
    label: string;
    name: string;
    type: string;
    defaultValue?: string;
}
const FormInput: React.FC<FormInputProps> = ({label, name, type, defaultValue}) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                className="input input-bordered"
            />
        </div>
    );
};

export default FormInput;