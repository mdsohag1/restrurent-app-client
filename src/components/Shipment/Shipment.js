import React from 'react';
import map from '../../Data/images/map.png'
import delivaryMan from '../../Data/images/Group 1151.png'
import raider from '../../Data/images/Group 1152.png'
import './Shipment.css'

const Shipment = () => {
    return (
        <div className='container d-flex shipment justify-content-between'>
            <div className="map">
                <img src={map} alt="" />
            </div>
            <div className="contact">
                <img src={delivaryMan} alt="" />
                <div className="location">
                    <h5>Your Location</h5>
                    <p>City</p>

                    <h5>Shop Address</h5>
                    <p>Address</p>
                </div>
                <div className="minute">
                    <h3>30 Minute</h3>
                    <p>Estimate Delivary Time</p>
                </div>
                <div className="raider d-flex items-center">
                    <img src={raider} alt="" />
                    <div className="name">
                        <h5>Hamim</h5>
                        <p>Your Rider</p>
                    </div>
                </div>
                <button className='contact-btn'>Contact</button>
            </div>
        </div>
    );
};

export default Shipment;