import React from 'react'
import classnames from 'classnames';
import './styles.scss';

const Fieldset = ({children, className}) => {
    const fieldsetClassNames = classnames('fieldset__wrapper', className);

    return (
        <fieldset className={fieldsetClassNames}>
            {children}
        </fieldset>
    );
}

export default Fieldset