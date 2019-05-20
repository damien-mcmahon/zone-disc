import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { any, arrayOf, object, string, bool } from 'prop-types';
import classNames from 'classnames';
import get from 'lodash.get';

import './styles.scss';
// TODO - Passing errors object is flaky...
const InputWrapper = ({name, label, type = 'text', errors, className, required = false, touched, ...props}) => {
    const errorField = errors && get(errors, name);
    const hasErrors = errorField && errorField.length > 0; 
    const isTouched = !!(touched && get(touched, name));
    const wrapperClassNames = classNames('input-wrapper__wrapper', className, {
        '--error': hasErrors && isTouched,
        '--required': required
    });

    const fieldClassNames = classNames('input-wrapper__input', {
        [`--${type}`]: type
    });

    return (
        <div className={wrapperClassNames}>
            {label && 
                <label 
                    aria-labelledby={name} 
                    className="input-wrapper__label" >
                    {label}
                </label>
            }

            <Field className={fieldClassNames} type={type} name={name} {...props}/>

            <div className="input-wrapper__error">
                <ErrorMessage name={name}>
                    {message => message}
                </ErrorMessage>
            </div>
        </div>
    );
};

InputWrapper.propTypes = {
    name: string.isRequired,
    label: string,
    type: string,
    errors: object,
    className: string,
    required: bool,
    props: arrayOf(any)
};

export default InputWrapper;