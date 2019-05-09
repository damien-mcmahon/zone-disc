import React, { Suspense, lazy } from 'react';

import './styles.scss';

const DiscoverSVG = lazy(() => import('./svgs/discover.svg'));
const DinersClubSVG = lazy(() => import('./svgs/diners-club.svg'));

const Logo = ({tenant}) => (
    <div className="logo__wrapper">
        <Suspense fallback={<h1>Logo</h1>}>
            {tenant === 'DN' ? <DiscoverSVG /> : <DinersClubSVG />}
        </Suspense>
    </div>
);

export default Logo;