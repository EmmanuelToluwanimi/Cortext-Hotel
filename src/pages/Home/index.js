import React from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { BsBookmarkPlus, BsLifePreserver } from 'react-icons/bs';
import { FiMonitor, FiWifi } from 'react-icons/fi';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { FaParking, FaSwimmer } from 'react-icons/fa';
import { Link as Linkscroll } from 'react-scroll';


function Home() {
    const services = [
        {
            name: 'Private Workspace',
            icon: <FiMonitor />,
        },
        {
            name: 'Free WiFi',
            icon: <FiWifi />,
        },
        {
            name: 'Swimming Pool',
            icon: <FaSwimmer />,
        },
        {
            name: 'Laundry Service',
            icon: <CgSmartHomeWashMachine />,
        },
        {
            name: 'Parking Lot',
            icon: <FaParking />,
        },
        {
            name: 'Others',
            icon: <BsLifePreserver />,
        },
    ]

    return (
        <>
            <section id="hero">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div className="heroContainer">
                        <div></div>
                        <div className="heroCaption">
                            <div className="heroWelcome">WELCOME TO CORTEX HOTEL</div>
                            <h1 className="heroTitle">
                                WE ARE QUITE A PLACE TO STAY AT
                            </h1>
                            <div className="heroText">
                                <div>Make a Reservation</div>
                                <div className="hr"></div>
                                <button className="bookBtn_hero">Book now <BsBookmarkPlus className="icn" /></button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>

            <section id="about" className="sectionWrapper">
                <div className="sectionTitle">
                    <h2>About Us</h2>
                    <div className="hrs"></div>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">

                    <div className="aboutContainer">
                        <div className="aboutBanner">
                            <img className="aboutImg" src="https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/03/bg_pic_00.jpg" alt="BIG BED" />
                        </div>
                        <div className="aboutCaption">
                            <h1>Welcome to Cortex Hotel</h1>
                            <div className="aboutText">
                                <p>
                                    Cortex is a family-owned hotel that desires to cater and provide guests
                                    with personalized hospitality based on what they prefer.
                                </p>

                                <p>
                                    While we aim to give you an authentic experience whenever you stay with us,
                                    we also guarantee consistent high standards of customer service at Roof.
                                    Contemporary amenities and timeless elegance are reflected throughout every guest room at our luxury hotel.
                                    We hope to make your stay unforgettable in the best way.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>

            <section id="services" className="sectionWrapper">
                <div className="sectionTitle">
                    <h2>Our Services</h2>
                    <div className="hrs"></div>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div className="serviceHolder">
                        {
                            services.map((item) => {
                                return <div className="service" key={item.name}>
                                    <div className="serviceIcons">
                                        {item.icon}
                                    </div>
                                    <span>{item.name}</span>
                                </div>
                            })
                        }
                    </div>
                </ScrollAnimation>
            </section>

            <section className="midSection">
                <div className="midTitle">Providing High Quality Accommodation</div>
                <button className="bookBtn">Book now <BsBookmarkPlus className="icn" /></button>
            </section>

            <section className="sectionWrapper">
                <div className="sectionTitle">
                    <h2>Rooms</h2>
                    <div className="hrs"></div>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <div>
                        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInLeft">
                            <h1  className="roomTitle">Availble Rooms & Suites</h1>
                            <div className="roomLinkblock">
                                <Linkscroll to="rooms" className="roomLink">See all Rooms</Linkscroll>
                                <div className="xyz"></div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="roomWrapper">
                        <div className="suite card shadow suite1">
                            <h4 className="suiteCaption">
                                Modern Room
                            </h4>
                        </div>
                        <div className="suite card shadow suite2">
                            <h4 className="suiteCaption">
                                Luxe Room
                            </h4>
                        </div>
                        <div className="suite card shadow suite3">
                            <h4 className="suiteCaption">
                                Grand Delux Room
                            </h4>
                        </div>
                    </div>
                </ScrollAnimation>
                
            </section>

        </>
    )
}

export default Home;
