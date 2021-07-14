import React from 'react';
import './style.css';
// import ScrollAnimation from 'react-animate-on-scroll';

function Footer() {
    return (

        <footer className="sectionWrapper footer">

            <div>
                <h1 className="footerLogo">
                    <span>C</span>ortex
                </h1>
                <div className="kkk">
                    <div className="logoText">
                        Hotel and Resort
                    </div>
                </div>
            </div>
            <div className="footerDetails">
                <div className="fdetail">
                    <div>Phone:</div>
                    <div>+1(21-73015-934)</div>
                </div>
                <div className="fdetail">
                    <div>Address:</div>
                    <address>1650 West Magic Way, Anaheim California</address>
                </div>
                <div className="fdetail">
                    <div>Mail:</div>
                    <div>
                        <a href="mailto:jksjsjdkjk@g">@cortex.com</a>
                    </div>
                </div>

            </div>


        </footer>

    )
}

export default Footer;
