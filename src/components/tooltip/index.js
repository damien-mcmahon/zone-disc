import React from 'react';
import ReactTooltip from 'react-tooltip';
import { element, oneOf, arrayOf, string, oneOfType } from 'prop-types';

import './styles.scss';

const Tooltip = ({direction = "top", name, children, content}) => (
    <span className="tooltip__wrapper">
        <div data-tip={name} data-for={name}>{children}</div>

        <ReactTooltip id={name} type="light" place={direction} effect="solid">
            {content}
        </ReactTooltip>
    </span>
);

Tooltip.propTypes = {
    direction: oneOf(['top', 'right', 'bottom', 'left']),
    name: string.isRequired,
    children: oneOfType([element, arrayOf(element)]),
    content: oneOfType([string, element])
}

export default Tooltip;