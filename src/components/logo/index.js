import React, { Suspense, lazy } from 'react';
import classnames from 'classnames';
import { string, oneOf } from 'prop-types';

import './styles.scss';

const DiscoverSVG = lazy(() => import('./svgs/discover.svg'));
const DinersClubSVG = lazy(() => import('./svgs/diners-club.svg'));

const Logo = ({tenant, className}) => {
    const classes = classnames('logo__wrapper', className);
    return (
        <div className={classes}>
            <Suspense fallback={<h1>Logo</h1>}>
                {tenant === 'DN' ? <DiscoverSVG className="logo__image" /> : <DinersClubSVG className="logo__image"/>}
            </Suspense>
        </div>
    );
}

Logo.propTypes = {
    className: string,
    tenant: oneOf(['DCI', 'DN'])
};

export default Logo;