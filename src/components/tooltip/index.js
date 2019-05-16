import React from 'react';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const Tooltip = ({direction = "top", name, children, content}) => (
    <span className="tooltip__wrapper">
        <div data-tip={name} data-for={name}>{children}</div>

        <ReactTooltip id={name} type="light" place={direction} effect="solid">
            {content}
        </ReactTooltip>
    </span>
);

export default Tooltip;