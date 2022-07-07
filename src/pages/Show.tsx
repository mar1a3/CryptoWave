import React, { useState, useEffect } from 'react';
import { showStore } from '../stores/showStore';
import { useParams } from 'react-router-dom';
import { Area,AreaChart,CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Header } from '../components/Header/Header';
import './style .css'
import { IconLoaderQuarter } from '@tabler/icons-react';
import classNames from 'classnames';


export const Show: React.FC = () =>{
    const store = showStore()
    const params = useParams()

    React.useEffect(() => {
        store.fetchData(params.id)
    }, [])

    return(
      <>
      <Header />
        <div className="show-container">
        <header>
          <img src={store.coinData?.image} alt="" />
          <h2>{store.coinData?.name} ({store.coinData?.symbol})</h2>
        </header>
        <div className="show-graph">
<AreaChart
      width={800}
      height={200}
      data={store.graphData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>

    <h2>Details</h2>
    <div className="show-description">
    <div>
      <h4>Market cap rank</h4>
      <span>{store.coinData?.market_cap_rank}</span>
    </div>
    <div>
      <h4>24 high</h4>
      <span>$ {store.coinData?.high_24}</span>
    </div>

    <div>
      <h4>24 low</h4>
      <span>$ {store.coinData?.low_24}</span>
    </div>

    <div>
      <h4>Circulating supply</h4>
      <span>$ {store.coinData?.supply}</span>
    </div>

    <div>
      <h4>Current price</h4>
      <span>$ {store.coinData?.current_price}</span>
    </div>

    <div>
      <h4>1y change</h4>
      <span>{store.coinData?.year_change} %</span>
    </div>
    </div>
    </div>
</>



    )
}