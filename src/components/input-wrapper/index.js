import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { any, arrayOf, string, boolean } from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const InputWrapper = ({name, label, type = 'text', errors = '', className, required, ...props}) => {
    const hasErrors = errors.length > 0; 
    const wrapperClassNames = classNames('input-wrapper__wrapper', className, {
        '--error': hasErrors,
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

            <ErrorMessage name={name}>
                {message => 
                    <div className="input-wrapper__error">
                        {message}
                    </div>
                }
            </ErrorMessage>
        </div>
    );
};

InputWrapper.propTypes = {
    name: string.isRequired,
    label: string,
    type: string,
    errors: string,
    className: string,
    required: boolean,
    props: arrayOf(any)
};

export default InputWrapper;