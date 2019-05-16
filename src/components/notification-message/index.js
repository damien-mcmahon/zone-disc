import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shape, string, oneOf } from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const NotificationMessage = ({info}) => {
    const { icon, message, timestamp, status = 'default' } = info
    const iconWrapperClasses = classnames('notification-message__icon-wrapper', `--${status}`);

    return (
        <div className="notification-message__wrapper">
            <div className={iconWrapperClasses}>
                <FontAwesomeIcon className="notification-message__icon" icon={icon} />
            </div>

            <div className="notification-message__info-wrapper">
                <p className="notification-message__text">{message}</p>
                <span className="notification-message__timestamp">{timestamp}</span>
            </div>
        </div>
    );
}

NotificationMessage.propTypes = {
    info: shape({
        icon: string,
        message: string,
        timestamp: string,
        status: oneOf(['default', 'success', 'error', 'warning'])
    })
};

export default NotificationMessage;