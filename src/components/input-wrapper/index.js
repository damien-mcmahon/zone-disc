import React from 'react';
import { Field, ErrorMessage } from 'formik';

import './styles.scss';

const InputWrapper = ({name, label, type = 'text', errors = '', ...props}) => {
    const hasErrors = errors.length > 0; 
    return (
        <div className={`input-wrapper__wrapper ${hasErrors && '--error'}`}>
            <label className="input-wrapper__label">{label}</label>
            <Field className={`input-wrapper__input --${type}`} type={type} name={name} {...props}/>
            <ErrorMessage name={name}>
                {message => 
                    <div className="input-wrapper__error">
                        {message}
                    </div>
                }
            </ErrorMessage>
        </div>
    );
}

export default InputWrapper;