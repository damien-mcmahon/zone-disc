import React from 'react'
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SERVICE_PARTY_ID, replaceParam } from '../../config/routes';

import './styles.scss';

const STATUSES = {
    'Active': {
        icon: 'check-double',
        actionText: 'Add Product Template',
        extraClass: 'active',
    },

    'Awaiting Approval': {
        icon: 'hourglass-start',
        actionText: 'Edit Party Details',
        extraClass: 'awaiting',
    },

    'Rejected': {
        icon: 'times',
        actionText: 'Review and submit again',
        extraClass: 'rejected'
    }
};

const QueueCard = ({party}) => {
    const STATUS_INFO = STATUSES[party.statusName];
    const queueCardClassNames = classnames('queue-card__wrapper', `--${STATUS_INFO.extraClass}`);

    return (
        <div className={queueCardClassNames}>
            <div className="queue-card__status-wrapper">
                <FontAwesomeIcon 
                    className="queue-card__icon"
                    icon={STATUS_INFO.icon} /> 
            </div>

            <div className="queue-card__info-wrapper">
                <h1 className="queue-card__business-name">{party.partyName}</h1>
                <p className="queue-card__approval-status">{party.statusName}</p>
                <Link 
                    className="queue-card__action-link"
                    to={replaceParam(SERVICE_PARTY_ID.path, party.id)}>
                    {STATUS_INFO.actionText}
                </Link>
            </div>
        </div>
    );
}

export default QueueCard;