import React from "react";
import { Link } from "react-router-dom";
import './style.css'

type CoinProps ={
    coin:any;
}

export const ItemList:React.FC<CoinProps> = ({coin}) =>{
    return(
        <>
        <Link to={`/${coin.id}`}>
        <div className="coin-list">
            <div className="coin-list-image">
                <img src={coin.image} alt="" />
                <p className="coin-list-name">{coin.name}</p>
                </div>
            <div className="coin-list-24h">
            <p className={"coin-list-name " +
            (coin.price_change24 <= 0
                ? "down"
                :"up")
            }>
                {coin?.price_change24 +'%'}
                </p>
            </div>

            <div className="coin-prices-block">
            {coin.priceBTC && (
                <div className="coin-list-prices">
                <span className="coin-list-btc"> {Number(coin.priceBTC).toFixed(6)} BTC</span>
                <span className="coin-list-usd">$ {coin.priceUSD}</span>
            </div> )}
            </div>
            </div>
            </Link>
        </>
    )
}