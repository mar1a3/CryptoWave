import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import './style.css';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // Логика для обработки подписки, например отправка на сервер
        console.log('Subscribed with email:', email);
        setEmail(''); // Очистка поля после отправки
    };

    return (
        <div>
            <section className='subsctiption-section' id='join'>
                <div className='subsctiption-container'>
                    <div className='subsctiption-text'>
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>
                            Stay updated with our latest news and offers. Please
                            keep me updated by email with the latest crypto
                            news, research findings, reward programs, event
                            updates, coin listings and more information from
                            CryptoWave.
                        </p>
                        <form className='subsctiption-form'>
                            <input
                                type='email'
                                value={email}
                                onChange={handleChange}
                                placeholder='Email adress'
                                required
                            />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                    <div className='subsctiption-right'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart width={300} height={100} data={data}>
                                <Line
                                    type='monotone'
                                    dataKey='pv'
                                    stroke='#8884d8'
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
};
