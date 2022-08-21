import React, { useState } from 'react';
import './Choose.css'
import Data from '../../Data/fakeData2'
import { Link } from 'react-router-dom';

const Choose = () => {
    const [choose, setChoose] = useState(Data)
    return (
        <div className='container choose'>
            <h3>Why You Choose Us</h3>
            <p className='main-pra'><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quis atque numquam asperiores sequi sapiente, quod officia possimus aliquid repudiandae?</i></p>
            <div className="row">
                {
                    choose.map(item => {
                        const {img, icon, title, description} = item;
                        return (
                            <div className="col-md-4">
                            <div className="card2 text-center">
                                <img src={img} alt="" />
                                <div className="cardBody">
                                    <div className="icon">
                                        <img src={icon} alt="" />
                                    </div>
                                    <div className="icon-text">
                                        <h4>{title}</h4>
                                        <p className='des'>{description}</p>
                                        <Link to={'/about'}>
                                         <p style={{cursor: "pointer"}}>See More</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Choose;