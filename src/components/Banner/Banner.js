import React from 'react';
import banner from '../../Data/images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-field'>
            <div className="banner">
                <img src={banner} alt=""/>
            </div>
            <div className="text">
                <h1>Best food witing for your belly</h1>
                <div className='text-field'>
                    <input type="text" name="" id="" placeholder='search food items'/>
                    <button className=''>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;