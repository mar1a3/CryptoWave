import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export const Header = () =>{
    return(
        <div>
            <header className="header">
            <div className="header-width">
                {/* {back && (
                <Link to="/">
                <div className="exit">
                <a href="/#" style={{textDecoration:'none'}}>
                <IconArrowLeft className="exit-arrow"/>
                </a>
                </div>
                </Link>
                )} */}

                <h2 className="header-title">
                    <Link to="/">Cryptocurrency Prices by Market Cap</Link></h2>
            </div>
            </header>
        </div>
    )
}

