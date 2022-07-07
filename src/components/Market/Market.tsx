import React, { useState, useEffect } from 'react';

import { IconLoaderQuarter } from '@tabler/icons-react';

import './style.css'
import { homeStore } from '../../stores/homeStore';
import { ItemList } from '../ItemList/ItemList';
import classNames from 'classnames';

export const Market: React.FC = () =>{
    const store = homeStore()
    React.useEffect(() => {
        store.fetchCoins()
    }, [])

    return(
        <>
            <section className="table-section" id="market">
            
            <div className="header-container">
            <header className="header-search">
                <div className="header-search-width">
                <h2 >Search for a coin</h2>
                <input type="text" value={store.query} onChange={store.setQuery} />
                </div>
            </header>
            <div className="home-cryptos">
            <div className="home-cryptos-title">
                    <p>Coin</p>
                    <p>Name</p>
                    <p>24h Change</p>
                    <p>Price</p>
                </div>
            {store.coins.map(coin => {
                return (
                    <ItemList key={coin.id} coin={coin}/>
                )
            })}               
            </div>
            </div>
        </section>
        </>
    )
}