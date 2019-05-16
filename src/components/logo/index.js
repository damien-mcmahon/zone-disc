import React, { Suspense, lazy } from 'react';
import ZoneSVG from './svgs/zone.svg';
import './styles.scss';

/*
const DiscoverSVG = lazy(() => import('./svgs/discover.svg'));
const DinersClubSVG = lazy(() => import('./svgs/diners-club.svg'));
*/

const Logo = ({tenant}) => (
    <div className="logo__wrapper">
        <ZoneSVG className="logo__image --zone"  style={{width: '50%'}}/>
    </div>
);
/*

        <Suspense fallback={<h1>Logo</h1>}>
            {tenant === 'DN' ? <DiscoverSVG className="logo__image" /> : <DinersClubSVG className="logo__image"/>}
        </Suspense>
*/
export default Logo;