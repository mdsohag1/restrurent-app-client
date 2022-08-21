import React from 'react';
import './Footer.css'
import logo from '../../Data/images/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='container p-5'>
                <div className="footer-top d-flex justify-content-between">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-link d-flex">
                        <div className="link-1">
                            <a href="">About</a>
                            <a href="">Blog</a>
                            <a href="">Review our shop</a>
                            <a href="">Sign Up to Delivary</a>
                        </div>
                        <div className="link-1">
                            <a href="">Get Help</a>
                            <a href="">Read our FAQS</a>
                            <a href="">View all citis</a>
                            <a href="">Add Your Restrurant</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-between mt-5">
                    <div className="copy">
                        <p>Copyright @2022 Onion restrurent</p>
                    </div>
                    <div className="about d-flex text-white">
                        <p>privacy policy</p>
                        <p>Terms and uses</p>
                        <p>Pricing</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;