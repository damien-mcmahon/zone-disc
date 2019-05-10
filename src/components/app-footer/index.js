import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const FOOTER_NAV_ITEMS = [
    {path: '/contact', label: 'Contact Us'},
    {path: '/help', label: 'Help'},
    {path: '/terms', label: 'Terms of Use'},
    {path: '/privacy-policy', label: 'Privacy Policy'}
];

const AppFooter = () => (
    <footer className="app__footer-wrapper">
        <div className="footer__copyright-notice">
            &copy; 2019 DFS Services LLC
        </div>

        <nav className="footer__nav-wrapper">
            {FOOTER_NAV_ITEMS.map(item => (
                <div className="footer__nav-item-wrapper">
                    <Link 
                        className="footer__nav-link"
                        to={item.path}>{item.label}</Link>
                </div>
            ))}            
        </nav>

        <div className="footer__brand-wrapper">

        </div>
    </footer>
);

export default AppFooter;