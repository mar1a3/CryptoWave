import React from 'react';
import './style.css';
import { IconBrandTelegram, IconMenu2, IconSquareX } from '@tabler/icons-react';


export const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const toggleMenu = () =>{
        setOpenMenu(true);
        document.body.classList.toggle('no-scroll', !openMenu);
    }

    const closeMenu = () => {
        setOpenMenu(false);
        document.body.classList.remove('no-scroll');
    }

    

    return (
        <>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <p>CryptoWave</p>
                </div>
                <ul className='nav-list'>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#advantages'>Advantages</a>
                    </li>
                    <li>
                        <a href='#market'>Market</a>
                    </li>
                    <li>
                        <a href='#join'>Join</a>
                    </li>
                </ul>
                <div className='icons'>
                <IconBrandTelegram className='icon' />
                <div className='menu-icon' onClick={toggleMenu}>
                    <IconMenu2 className='icon'/>
                </div>
                </div>
{/* 
мобильное меню */}
                    <div className={`mobile-menu ${openMenu ? 'open': ''}`}>
                    <IconSquareX className='close-icon' onClick={closeMenu}/>
                        <ul className='mobile-nav'>
                    <li>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href='#exchange' onClick={closeMenu}>Exchange</a>
                    </li>
                    <li>
                        <a href='#how-exchange' onClick={closeMenu}>How exchange</a>
                    </li>
                    <li>
                        <a href='#support' onClick={closeMenu}>Support</a>
                    </li>
                </ul>
                    </div>
            </nav>
        </>
    );
};
