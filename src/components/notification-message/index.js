import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shape, string } from 'prop-types';

import './styles.scss';

const NotificationMessage = ({info}) => {
    const { icon, message, timestamp } = info
    return (
        <div className="notification-message__wrapper">
            <div className="notification-message__icon-wrapper">
                <FontAwesomeIcon icon={icon} />
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
        timestamp: string
    })
};

export default NotificationMessage;