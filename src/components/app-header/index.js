import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../logo';
import NotificationMessage from '../notification-message';
import Tooltip from '../tooltip';

import './styles.scss';

const NAV_ACTIONS = [
    {icon: 'envelope', label: 'Notifications'},
    {icon: 'user-circle', label: 'Profile'}
];

const notifications = [{
    icon: 'times-circle',
    message: 'Your application was rejected',
    timestamp: '12 minutes ago',
    status: 'error'
}, {
    icon: 'comments',
    message: 'John Doe replied to your comment',
    timestamp: '23 minutes ago',
    status: 'default'
}, {
    icon: 'check-double',
    message: 'Application was approved',
    timestamp: '23 minutes ago',
    status: 'success'
}];

const NotificationTooltip = (
    <div className="notifications__wrapper">
        {notifications.map(n => 
            <NotificationMessage key={n.message} info={n} />
        )}
    </div>
);

const AppHeader = ({tenant}) => (
    <header className="app__header__wrapper">
        <Logo tenant={tenant} />

        <div className="header__actions-wrapper">
            {NAV_ACTIONS.map(action => (
                <div key={action.icon} className="header__nav-action">
                    {action.label === 'Notifications' ?
                        <Tooltip name="notifications" direction="bottom" content={NotificationTooltip}>
                            <FontAwesomeIcon icon={action.icon} /> 
                        </Tooltip> 
                        :
                        <FontAwesomeIcon icon={action.icon} />

                    }
                </div>
            ))}
        </div>
    </header>
);

export default AppHeader;