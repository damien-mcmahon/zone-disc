import React, { useRef,useState } from 'react'
import { func, string, any, bool } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import './styles.scss';

const Checkbox = ({className, name, label, value, checked, onChange, disabled, size = "1x"}) => {
    const checkboxRef = useRef(null);
    const [isChecked, setChecked] = useState(checked);
    const CHECKED_ICON = ['fas','check-square'];
    const UNCHECKED_ICON = ['far','square'];

    const classes = classnames('checkbox__wrapper', className, {
        '--disabled': disabled
    });

    return (
        <div className={classes}>
            <label className="checkbox__label">
                <input 
                    ref={checkboxRef}
                    type="checkbox" 
                    className="checkbox__input"
                    onClick={() => {
                        onChange(value, checkboxRef.current.checked);
                        setChecked(checkboxRef.current.checked);
                    }}
                    defaultChecked={checked}
                    disabled={disabled}
                    name={name} 
                    value={value} />
                
                <div className="checkbox__icon-wrapper">
                    <FontAwesomeIcon 
                        key={checked} 
                        className="checkbox__icon"
                        size={size}
                        icon={isChecked ? CHECKED_ICON : UNCHECKED_ICON} />
                </div>

                <span className="checkbox__label-wrapper">{label}</span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    label: any,
    name: string.isRequired,
    value: any,
    checked: bool,
    onChange: func,
    size: string
};

export default Checkbox;