import React from 'react';
import {ErrorMessage} from 'formik';
import Select from 'react-select';

const SelectWrapper = ({name, label, options, errors, ...props}) => (
    <div className="select-wrapper__wrapper">
        <label htmlFor={name}>{label}</label>
        <Select 
            {...props} 
            name={name} 
            options={options} 
            onChange={({value}) => props.onChange && props.onChange(value)} />
        <ErrorMessage name={name} />
    </div>
);

export default SelectWrapper;