import React, { useState, useEffect } from 'react';
import Exchange from '../images/money-exchange.png'
import './style.css';


interface Coin{
    id:number;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h:number;
}

export const About: React.FC = () =>{
    const [data, setData] = useState<Coin[]>([])

    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false')
        .then((res) => {
            return res.json()
        })
        .then((arr) => {
            setData(arr)
        })
    },[])


    return(
        <>
        <section className="about-section" id='about'>
        <div className="container">
            <div className="about-content">
                <div className="about-content__text">
            <h1>New crypto exchange platform — 
                <br /> 
                <span> CryptoWave</span></h1>
                <h2>We are happy to present you new biggest 
                    service to exchange your cryptocurrency. 
                    <br/>You can easily exchange every coin listed 
                    on Binance with lowest fee!</h2>
                </div>
                </div>
                <div className="coins-row">
                        {data.map((item) =>(
                            <div key ={item.id} className="coin-item">
                            <img  src={item?.image} alt="Exchange" />
                            <p className="coin-name">
                                {item?.name}{" "}
                                <span className={"coin__price "+
                                 (item.price_change_percentage_24h <= 0
                                ? "down"
                                : "up")
                                }>
                                    {item?.price_change_percentage_24h.toFixed(2) + "%"}
                                </span>
                            </p>
                            <p className="current-price">{"$ " + item.current_price.toLocaleString('en-US')}</p>
                            </div>
                        ))}                        
                    <div/>
                </div>
        </div>
        </section>
        </>
        
    )
}

