import React from 'react';
import {ErrorMessage} from 'formik';
import Select from 'react-select';
import { any, arrayOf, bool, object, string, shape } from 'prop-types';
import classNames from 'classnames';
import get from 'lodash.get';

import './styles.scss';

const SelectWrapper = ({className, name, label, options, errors, required = false, ...props}) => {
    const errorField = errors && get(errors, name);
    const hasErrors = errorField && errorField.length > 0;
    const wrapperClassNames = classNames('select-wrapper__wrapper', className, {
        '--required': required,
        '--error': hasErrors
    });

    return (
        <div className={wrapperClassNames}>
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
};

SelectWrapper.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    options: arrayOf(shape({
        label: string,
        value: any
    })),
    errors: object,
    required: bool
};

export default SelectWrapper;