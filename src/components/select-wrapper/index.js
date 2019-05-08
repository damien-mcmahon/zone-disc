import React from 'react';
import {ErrorMessage} from 'formik';
import Select from 'react-select';

import './styles.scss';

const SelectWrapper = ({name, label, options, errors, ...props}) => (
    <div className="select-wrapper__wrapper">
        <label className="select-wrapper__label" htmlFor={name}>{label}</label>

        <Select 
            {...props} 
            name={name} 
            options={options} 
            className="select-wrapper__input"
            classNamePrefix="select-component"
            onChange={({value}) => props.onChange && props.onChange(value)} />

        <ErrorMessage name={name}>
            {message => 
                <div className="select-wrapper__error">{message}</div>
            }
        </ErrorMessage>
    </div>
);

export default SelectWrapper;