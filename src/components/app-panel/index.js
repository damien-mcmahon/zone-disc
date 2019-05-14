import React from 'react';
import { shape, string, element, oneOfType, oneOf } from 'prop-types';
import classnames from 'classnames';

import Tooltip from '../tooltip';

import './styles.scss';

const AppPanel = ({className, title, children, help}) => {
    const appPanelClasses = classnames('panel__content-container', className);
    return (
        <div className="panel__wrapper">
            {title && 
                <div className="panel__header">
                    <h2 className="panel__title">{title}</h2>
                    {help &&
                        <Tooltip place={help.place} name={help.name} content={help.content}>
                            {help.children}
                        </Tooltip>
                    }
                </div>
            }

            <div className={appPanelClasses}>
                {children}
            </div>
        </div>
    );
}

AppPanel.propTypes = {
    name: string,
    children: element,
    help: shape({
        name: string.isRequired,
        content: oneOfType([string, element]).isRequired,
        children: element.isRequired,
        place: oneOf(['top', 'right', 'bottom', 'left'])
    })
};

export default AppPanel;