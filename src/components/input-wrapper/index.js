import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputWrapper = ({name, label, type = 'text', errors}) => (
    <div className="input-wrapper__wrapper">
        <label htmlFor={name}>{label}</label>
        <Field type={type} name={name} />
        <ErrorMessage name={name} />
    </div>
);

export default InputWrapper;