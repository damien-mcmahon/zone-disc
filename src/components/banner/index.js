import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { oneOf, string } from 'prop-types';

import './styles.scss';

const Banner = ({state = 'default', title, subTitle, className}) => {
    const bannerClasses = classnames('banner__wrapper', className, `--${state}`);
    // TODO - Map these correctly
    const ICON_MAPPINGS = {
        default: "info-circle",
        success: "check-circle",
        warning: 'check-circle',
        error: 'check-circle'
    };

    return (
        <div className={bannerClasses}>
            <div className="banner__icon-wrapper">
                <FontAwesomeIcon icon={ICON_MAPPINGS[state]} size="8x" />
            </div>

            <div className="banner__title-wrapper">
                <h1 className="banner__title">{title}</h1>
                {subTitle && <h2 className="banner__extraInfo">{subTitle}</h2>}
            </div>
        </div>
    );
};

Banner.propTypes = {
    state: oneOf(['default','success', 'error', 'warning']),
    title: string.isRequired,
    subTitle: string
}

export default Banner;