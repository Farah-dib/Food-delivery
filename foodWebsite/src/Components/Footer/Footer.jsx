import React from 'react'
import './Footer.css'
import { assets } from '../../../../assets/admin_assets/frontend_assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left"><img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta pariatur eum suscipit veritatis ratione aperiam ad numquam sed exercitationem asperiores possimus reiciendis in, temporibus vel recusandae, rem accusantium architecto?</p>
                    <div className="footer-socal-icon">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className=' footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+!-333-668-7890</li>
                        <li>Contact@tomate.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">
                CopyRight 2025 © Tomato.com All Right Reserved.
            </p>
        </div>
    )
}

export default Footer