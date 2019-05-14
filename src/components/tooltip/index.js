import React from 'react';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const Tooltip = ({direction = "top", name, children, content}) => (
    <span className="tooltip__wrapper">
        <div data-tip={name}>{children}</div>

        <ReactTooltip type="light" place={direction} effect="solid">
            {content}
        </ReactTooltip>
    </span>
);

export default Tooltip;