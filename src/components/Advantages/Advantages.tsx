import React from 'react';

import Slider from 'react-slick';

import PictureOne from '../images/hand-with-golden-litecoin.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

export const Advantages = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <section className='advantages-section' id='advantages'>
                <div className='advantages-container'>
                    <h1>Discover Your Next Crypto Venture</h1>
                    <div className='grid-container'>
                        <div className='left-column'>
                            <div className='wrapper-box'>
                                <div className='big-box'>
                                    <div className='big-box-text'>
                                        <p className='p-1'>Earn up to</p>
                                        <b>20%</b>
                                        <p className='p-2'>
                                        in yearly crypto rewards
                                        </p>
                                        <p className='p-3'>
                                        Accumulate rewards effortlessly 
                                        by holding cryptocurrencies in your account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right-column'>
                            <div className='wrapper-box'>
                                <div className='small-box one'>
                                    <div className='big-box-text'>
                                        <p className='p-1'>
                                            <b>CryptoWave Application</b>
                                        </p>
                                        <p className='p-3'>
                                        Manage your assets on your terms, right at your fingertips.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='wrapper-box'>
                                <div className='small-box two'>
                                    <div className='big-box-text'>
                                        <p className='p-1'>
                                            <b>Margin Trading</b>
                                        </p>
                                        <p className='p-3'>
                                        Margin Trading is the latest 
                                        addition to our award-winning 
                                        product ecosystem. Your ultimate 
                                        trading destination has arrived.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='wrapper-box'>
                                <div className='small-box three'>
                                    <div className='big-box-text'>
                                        <p className='p-1'>
                                            <b>Instant Purchase</b>
                                        </p>
                                        <p className='p-3'>
                                        Begin building your dream portfolio in an instant.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='wrapper-box'>
                                <div className='small-box four'>
                                    <div className='big-box-text'>
                                        <p className='p-1'>
                                            <b>CryptoWave Wallet</b>
                                        </p>
                                        <p className='p-3'>
                                        Use Trust Wallet, Metamask or to connect to the app.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className='slider-container'>
                        <Slider {...settings}>
                            <div className='card-item main'>
                                <div className='text'>
                                    <p className='p-1'>
                                        <b>CryptoWave App</b>
                                    </p>
                                    <p className='p-3'>
                                        Your assets. On your terms. At your
                                        fingertips.
                                    </p>
                                </div>
                            </div>

                            <div className='card-item one'>
                                <div className='text'>
                                    <p className='p-1'>
                                        <b>CryptoWave App</b>
                                    </p>
                                    <p className='p-3'>
                                        Your assets. On your terms. At your
                                        fingertips.
                                    </p>
                                </div>
                            </div>

                            <div className='card-item three'>
                                <div
                                    className='text'
                                    style={{ color: 'black' }}
                                >
                                    <p className='p-1'>
                                        <b>CryptoWave App</b>
                                    </p>
                                    <p className='p-3'>
                                        Your assets. On your terms. At your
                                        fingertips.
                                    </p>
                                </div>
                            </div>
                            <div className='card-item four'>
                                <div className='text'>
                                    <p className='p-1'>
                                        <b>CryptoWave App</b>
                                    </p>
                                    <p className='p-3'>
                                        Your assets. On your terms. At your
                                        fingertips.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );
};
