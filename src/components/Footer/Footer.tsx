import React, { useState, useEffect } from 'react';
import {IconBrandX, IconBrandTelegram, IconBrandFacebook,IconBrandLinkedin } from '@tabler/icons-react';

import './style.css';



export const Footer = () => {


    return (
        <div>
<footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item">
                    <IconBrandX className='footer-icon'/>
                </li>
                <li className="social-icon__item">
                <IconBrandTelegram className='footer-icon'/>
                </li>
                <li className="social-icon__item">
                <IconBrandFacebook className='footer-icon'/>
                </li>
                <li className="social-icon__item">
                <IconBrandLinkedin className='footer-icon'/>
                </li>
            </ul>
            <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="/#">About</a></li>
                <li className="menu__item"><a className="menu__link" href="/">Markets</a></li>
                <li className="menu__item"><a className="menu__link" href="/">Advantages</a></li>
                <li className="menu__item"><a className="menu__link" href="/">Subscribe</a></li>
                <li className="menu__item"><a className="menu__link" href="/">Contact</a></li>
            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </footer>
        </div>
    );
};
