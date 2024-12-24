import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-about">
                    <h4>ABOUT</h4>
                    <ul>
                        <li>Westmoor Engineering</li>
                        <li>PJ Engineering Products</li>
                        <li>Sound Dead Steel</li>
                        <li>Renown Enginering</li>
                        <li>Renown Material Handing</li>
                        <li>Pensher Skyech</li>
                    </ul>
                </div>
                <div className="footer-top-services">
                    <h4>SERVICES</h4>
                    <ul>
                        <li>Design</li>
                        <li>Laser Profiling</li>
                        <li>Painting & Coating</li>
                        <li>Fabrication</li>
                        <li>CNC Machining</li>
                        <li>Assembly & Testing</li>
                    </ul>
                </div>
                <div className="footer-top-sectors">
                    <h4>SECTORS</h4>
                    <ul>
                        <li>Defence</li>
                        <li>Marine, Oil & Gas</li>
                        <li>Materials Handling</li>
                        <li>Sensitive Industrial Apps</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <h1 className="footer-logo">LOGO</h1>
                <div className="footer-bottom-address">
                    <h4>SECTORS</h4>
                    <ul>
                        <li>Northumberland Business</li>
                        <li>Park West Cramlington</li>
                        <li>NE23 7RH</li>
                    </ul>
                </div>
                <div className="footer-bottom-contact">
                    <h4>Contact</h4>
                    <ul>
                        <li>+11 (0) 123 4567</li>
                        <li>info_dev@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer