import React from 'react';
import {ErrorMessage} from 'formik';
import Select from 'react-select';
import { any, boolean, string, shape } from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const SelectWrapper = ({name, label, options, errors, required = false, ...props}) => {
    const wrapperClassNames = classNames('select-wrapper__wrapper', {
        '--required': required
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
    options: shape({
        label: string,
        value: any
    }),
    errors: string,
    required: boolean
};

export default SelectWrapper;